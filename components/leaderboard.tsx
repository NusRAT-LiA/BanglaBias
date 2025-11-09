"use client"

import { useEffect, useState } from "react"
import Papa from "papaparse"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts"
import { DataTable } from "./data-table"

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 1024,
    height: typeof window !== "undefined" ? window.innerHeight : 768,
  })

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return windowSize
}

interface ModelData {
  Model: string
  Accuracy: number
  "Govt. Critique P": number
  "Govt. Critique R": number
  "Govt. Critique F1": number
  "Neutral P": number
  "Neutral R": number
  "Neutral F1": number
  "Govt. Leaning P": number
  "Govt. Leaning R": number
  "Govt. Leaning F1": number
  "Weighted Avg. P": number
  "Weighted Avg. R": number
  "Weighted Avg. F1": number
}

// Function to generate color shades with equal differences between models
// index: position in sorted list (0 = highest F1, darkest)
// total: total number of models
function getColorShade(index: number, total: number): string {
  // Calculate normalized position (0 to 1)
  // First model (index 0) = 0, last model (index total-1) = 1
  const normalized = total > 1 ? index / (total - 1) : 0
  
  // Base color: pastel green (hue ~150)
  // Lightness ranges from 25% (darkest for first/highest) to 75% (lightest for last/lowest)
  // Equal intervals between each model
  // Pastel colors have lower saturation
  const lightness = 25 + (normalized * 50) // 25% to 75%
  const saturation = 30
  const hue = 150
  
  // Return HSL color string
  return `hsl(${hue}, ${saturation}%, ${lightness}%)`
}

export function Leaderboard() {
  const [data, setData] = useState<ModelData[]>([])
  const [loading, setLoading] = useState(true)
  const [chartData, setChartData] = useState<any[]>([])
  const { width } = useWindowSize()

  useEffect(() => {
    const loadCSV = async () => {
      try {
        // Replace this with your actual CSV URL
        const csvUrl = "/leaderboard.csv"

        const response = await fetch(csvUrl)
        const csvText = await response.text()

        Papa.parse(csvText, {
          header: true,
          complete: (results) => {
            // Convert string numbers to actual numbers
            const parsed = results.data
              .filter((row: any) => row.Model)
              .map((row: any) => ({
                ...row,
                Accuracy: Number.parseFloat(row.Accuracy) || 0,
                "Govt. Critique P": Number.parseFloat(row["Govt. Critique P"]) || 0,
                "Govt. Critique R": Number.parseFloat(row["Govt. Critique R"]) || 0,
                "Govt. Critique F1": Number.parseFloat(row["Govt. Critique F1"]) || 0,
                "Neutral P": Number.parseFloat(row["Neutral P"]) || 0,
                "Neutral R": Number.parseFloat(row["Neutral R"]) || 0,
                "Neutral F1": Number.parseFloat(row["Neutral F1"]) || 0,
                "Govt. Leaning P": Number.parseFloat(row["Govt. Leaning P"]) || 0,
                "Govt. Leaning R": Number.parseFloat(row["Govt. Leaning R"]) || 0,
                "Govt. Leaning F1": Number.parseFloat(row["Govt. Leaning F1"]) || 0,
                "Weighted Avg. P": Number.parseFloat(row["Weighted Avg. P"]) || 0,
                "Weighted Avg. R": Number.parseFloat(row["Weighted Avg. R"]) || 0,
                "Weighted Avg. F1": Number.parseFloat(row["Weighted Avg. F1"]) || 0,
              }))

            setData(parsed as ModelData[])

            // Prepare chart data
            // Sort by F1 score descending (highest first = darkest)
            const sorted = [...parsed].sort((a, b) => (b["Weighted Avg. F1"] || 0) - (a["Weighted Avg. F1"] || 0))
            
            setChartData(
              sorted.map((row: any, index: number) => {
                const f1Score = Number.parseFloat(row["Weighted Avg. F1"]) || 0
                return {
                  name: row.Model,
                  "Weighted Avg. F1": f1Score,
                  fill: getColorShade(index, sorted.length),
                }
              }),
            )
          },
          error: () => {
            setData([])
          },
        })
      } catch (error) {
        console.error("Error loading CSV:", error)
        setData([])
      } finally {
        setLoading(false)
      }
    }

    loadCSV()
  }, [])

  if (loading) {
    return (
      <section className="bg-background py-12 md:py-16 border-t border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-center text-muted-foreground">Loading leaderboard...</p>
        </div>
      </section>
    )
  }

  return (
    <section className="bg-background py-12 md:py-16 border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-black mb-6 sm:mb-8">Model Performance Leaderboard</h2>

        {/* Chart */}
        <div className="mb-8 sm:mb-12 bg-card p-4 sm:p-6 rounded-lg border border-border">
          <h3 className="text-lg sm:text-xl font-semibold text-black mb-4">Weighted Average F1 Scores</h3>
          <ResponsiveContainer width="100%" height={width < 640 ? 300 : 400}>
            <BarChart 
              data={chartData} 
              layout="vertical" 
              margin={{ 
                top: 5, 
                right: 5, 
                left: width < 640 ? 50 : width < 1024 ? 60 : 70, 
                bottom: 5 
              }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
              <XAxis 
                type="number" 
                domain={[0, 1]} 
                stroke="var(--foreground)"
                tick={{ fontSize: width < 640 ? 11 : 13 }}
              />
              <YAxis 
                dataKey="name" 
                type="category" 
                width={width < 640 ? 45 : width < 1024 ? 55 : 65} 
                stroke="var(--foreground)"
                tick={{ fontSize: width < 640 ? 9 : 11 }}
                interval={0}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "var(--card)",
                  border: `1px solid var(--border)`,
                  color: "var(--foreground)",
                  borderRadius: "0.625rem",
                  fontSize: "0.875rem",
                }}
                formatter={(value: any) => [(value as number).toFixed(4), "F1 Score"]}
              />
              <Bar dataKey="Weighted Avg. F1" radius={4}>
                {chartData.map((entry: any, index: number) => (
                  <Cell key={`cell-${index}`} fill={entry.fill} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Table */}
        <div className="bg-card rounded-lg border border-border overflow-hidden">
          <DataTable data={data} />
        </div>
      </div>
    </section>
  )
}
