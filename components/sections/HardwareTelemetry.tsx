"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Activity as ActivityIcon, RefreshCw, Cpu, Gauge, Zap } from "lucide-react";

interface SensorPreset {
  name: string;
  mask: [number, number, number, number, number, number, number];
  deviation: string;
  correction: string;
  leftMotor: number;
  rightMotor: number;
}

const PRESETS: SensorPreset[] = [
  {
    name: "Center Track",
    mask: [0, 0, 0, 1, 0, 0, 0],
    deviation: "0.00 mm",
    correction: "Centered (Straight Line)",
    leftMotor: 100,
    rightMotor: 100,
  },
  {
    name: "Locked Array",
    mask: [1, 1, 1, 0, 1, 1, 1],
    deviation: "±0.04 mm",
    correction: "Line Locked (High Speed)",
    leftMotor: 98,
    rightMotor: 98,
  },
  {
    name: "Right Hairpin",
    mask: [1, 1, 0, 0, 0, 0, 0],
    deviation: "+3.85 mm",
    correction: "Hard Right Steer (+38°)",
    leftMotor: 100,
    rightMotor: 35,
  },
  {
    name: "Left Hairpin",
    mask: [0, 0, 0, 0, 0, 1, 1],
    deviation: "-3.92 mm",
    correction: "Hard Left Steer (-38°)",
    leftMotor: 35,
    rightMotor: 100,
  },
];

export const HardwareTelemetry = () => {
  const [sensors, setSensors] = useState<[number, number, number, number, number, number, number]>([1, 1, 1, 0, 1, 1, 1]);
  const [activePreset, setActivePreset] = useState<string>("Locked Array");

  const toggleSensor = (index: number) => {
    const updated = [...sensors] as [number, number, number, number, number, number, number];
    updated[index] = updated[index] === 1 ? 0 : 1;
    setSensors(updated);
    setActivePreset("Custom Manual");
  };

  const applyPreset = (preset: SensorPreset) => {
    setSensors(preset.mask);
    setActivePreset(preset.name);
  };

  // Derive dynamic stats from sensor state
  const leftActive = sensors[0] + sensors[1] + sensors[2];
  const rightActive = sensors[4] + sensors[5] + sensors[6];
  const centerActive = sensors[3];

  let steerStatus = "Centered Track";
  let leftMotor = 98;
  let rightMotor = 98;
  let deviation = "0.00 mm";

  if (leftActive > rightActive) {
    steerStatus = "Steering Correction (Right Turn)";
    leftMotor = Math.min(100, 75 + leftActive * 10);
    rightMotor = Math.max(20, 70 - leftActive * 20);
    deviation = `+${(leftActive * 1.45).toFixed(2)} mm`;
  } else if (rightActive > leftActive) {
    steerStatus = "Steering Correction (Left Turn)";
    leftMotor = Math.max(20, 70 - rightActive * 20);
    rightMotor = Math.min(100, 75 + rightActive * 10);
    deviation = `-${(rightActive * 1.45).toFixed(2)} mm`;
  } else if (centerActive === 1 || sensors.join("") === "1110111") {
    steerStatus = "Optimal Path Locked";
    leftMotor = 100;
    rightMotor = 100;
    deviation = "±0.03 mm";
  }

  const binaryString = sensors.join("");

  return (
    <div className="rounded-3xl bg-[#090C12] border border-white/10 p-6 sm:p-7 space-y-6 font-mono text-xs shadow-2xl relative overflow-hidden">
      {/* Top Header */}
      <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
        <div className="flex items-center gap-2 text-white">
          <ActivityIcon className="w-4 h-4 text-emerald-400 animate-pulse" />
          <span className="font-semibold text-xs tracking-wider">7-IR TELEMETRY MATRIX</span>
        </div>
        <span className="text-[10px] text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 px-2 py-0.5 rounded-full">
          2.4 kHz LOOP
        </span>
      </div>

      {/* Interactive 7 Sensor Bank */}
      <div className="space-y-2.5">
        <div className="flex items-center justify-between text-muted-foreground text-[11px]">
          <span>INTERACTIVE SENSOR BANK [S1 - S7]</span>
          <span className="text-white font-bold tracking-widest">{binaryString}</span>
        </div>

        <div className="grid grid-cols-7 gap-1.5 sm:gap-2 p-2.5 rounded-2xl bg-white/[0.02] border border-white/[0.05]">
          {sensors.map((val, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => toggleSensor(idx)}
              className={`flex flex-col items-center justify-center py-3 rounded-xl transition-all duration-200 border cursor-pointer ${
                val === 1
                  ? "bg-primary/20 border-primary text-white shadow-[0_0_12px_rgba(79,140,255,0.4)] scale-[1.02]"
                  : "bg-white/[0.02] border-white/[0.06] text-muted-foreground hover:border-white/20 hover:text-white"
              }`}
            >
              <span className="text-[9px] text-muted-foreground uppercase">S{idx + 1}</span>
              <span className="text-xs font-bold mt-1 font-mono">{val}</span>
              <span
                className={`w-1.5 h-1.5 rounded-full mt-1.5 ${
                  val === 1 ? "bg-primary animate-ping" : "bg-white/20"
                }`}
              />
            </button>
          ))}
        </div>
        <p className="text-[10px] text-muted-foreground/70 text-center italic">
          Click any sensor node above to toggle IR reflection state
        </p>
      </div>

      {/* Preset Selector */}
      <div className="flex flex-wrap gap-1.5">
        {PRESETS.map((preset) => (
          <button
            key={preset.name}
            type="button"
            onClick={() => applyPreset(preset)}
            className={`px-2.5 py-1 rounded-lg text-[10px] font-mono transition-all ${
              activePreset === preset.name
                ? "bg-primary text-white font-semibold"
                : "bg-white/[0.03] text-muted-foreground hover:text-white hover:bg-white/[0.06] border border-white/[0.05]"
            }`}
          >
            {preset.name}
          </button>
        ))}
      </div>

      {/* Live PID Motor Balance Bars */}
      <div className="space-y-3 pt-2 border-t border-white/[0.06]">
        <div className="flex items-center justify-between text-[11px]">
          <span className="text-muted-foreground">PWM Motor Output</span>
          <span className="text-white font-bold">{steerStatus}</span>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="space-y-1 p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.04]">
            <div className="flex justify-between text-[10px] text-muted-foreground">
              <span>M1 (LEFT)</span>
              <span className="text-white font-semibold">{leftMotor}%</span>
            </div>
            <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
              <motion.div
                className="bg-primary h-full"
                animate={{ width: `${leftMotor}%` }}
                transition={{ duration: 0.2 }}
              />
            </div>
          </div>

          <div className="space-y-1 p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.04]">
            <div className="flex justify-between text-[10px] text-muted-foreground">
              <span>M2 (RIGHT)</span>
              <span className="text-cyan-400 font-semibold">{rightMotor}%</span>
            </div>
            <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
              <motion.div
                className="bg-cyan-400 h-full"
                animate={{ width: `${rightMotor}%` }}
                transition={{ duration: 0.2 }}
              />
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center text-[10px] text-muted-foreground pt-1">
          <span>Centering Deviation: <span className="text-white font-semibold">{deviation}</span></span>
          <span className="text-amber-400 font-semibold">100% REGIONAL WIN RATE</span>
        </div>
      </div>

      {/* Chassis Card */}
      <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05] flex items-center justify-between text-[11px]">
        <span className="text-muted-foreground">Platform Chassis</span>
        <span className="text-white font-semibold">Custom Carbon &bull; 7-Sensor IR Array</span>
      </div>
    </div>
  );
};
