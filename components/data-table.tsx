"use client"

import { useState, useMemo } from "react"
import { ChevronUp, ChevronDown, Search } from "lucide-react"

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

type SortKey = keyof ModelData
type SortOrder = "asc" | "desc"

export function DataTable({ data }: { data: ModelData[] }) {
  const [sortKey, setSortKey] = useState<SortKey>("Weighted Avg. F1")
  const [sortOrder, setSortOrder] = useState<SortOrder>("desc")
  const [searchTerm, setSearchTerm] = useState("")

  const columns = [
    { key: "Model" as const, label: "Model", isNumeric: false },
    { key: "Accuracy" as const, label: "Accuracy", isNumeric: true },
    { key: "Govt. Critique F1" as const, label: "Govt. Critique F1", isNumeric: true },
    { key: "Neutral F1" as const, label: "Neutral F1", isNumeric: true },
    { key: "Govt. Leaning F1" as const, label: "Govt. Leaning F1", isNumeric: true },
    { key: "Weighted Avg. P" as const, label: "Weighted Avg. P", isNumeric: true },
    { key: "Weighted Avg. R" as const, label: "Weighted Avg. R", isNumeric: true },
    { key: "Weighted Avg. F1" as const, label: "Weighted Avg. F1", isNumeric: true },
  ]

  const handleSort = (key: SortKey) => {
    if (sortKey === key) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc")
    } else {
      setSortKey(key)
      setSortOrder("desc")
    }
  }

  const filteredAndSorted = useMemo(() => {
    const filtered = data.filter((item) => item.Model.toLowerCase().includes(searchTerm.toLowerCase()))

    filtered.sort((a, b) => {
      const aValue = a[sortKey] ?? 0
      const bValue = b[sortKey] ?? 0

      if (typeof aValue === "string") {
        return sortOrder === "asc" ? aValue.localeCompare(bValue as string) : (bValue as string).localeCompare(aValue)
      }

      return sortOrder === "asc" ? (aValue as number) - (bValue as number) : (bValue as number) - (aValue as number)
    })

    return filtered
  }, [data, sortKey, sortOrder, searchTerm])

  // Get top 3 for medals
  const topThree = new Set(filteredAndSorted.slice(0, 3).map((item) => item.Model))

  const getMedalColor = (model: string, index: number) => {
    if (!topThree.has(model)) return ""
    if (index === 0) return "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-900 dark:text-yellow-200"
    if (index === 1) return "bg-slate-100 dark:bg-slate-800/30 text-slate-900 dark:text-slate-200"
    if (index === 2) return "bg-orange-100 dark:bg-orange-900/30 text-orange-900 dark:text-orange-200"
    return ""
  }

  const getMedalEmoji = (index: number) => {
    if (index === 0) return "🥇"
    if (index === 1) return "🥈"
    if (index === 2) return "🥉"
    return ""
  }

  return (
    <div className="w-full">
      {/* Search Bar */}
      <div className="p-3 sm:p-4 border-b border-border">
        <div className="relative">
          <Search className="absolute left-2 sm:left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-3 h-3 sm:w-4 sm:h-4" />
          <input
            type="text"
            placeholder="Search models..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-8 sm:pl-10 pr-3 sm:pr-4 py-1.5 sm:py-2 bg-input border border-border rounded-lg text-sm sm:text-base text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          />
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <div className="inline-block min-w-full align-middle">
          <table className="w-full text-xs sm:text-sm">
            <thead className="bg-muted border-b border-border">
              <tr>
                {columns.map((column) => (
                  <th
                    key={column.key}
                    onClick={() => handleSort(column.key)}
                    className="px-2 sm:px-4 py-2 sm:py-3 text-left font-semibold text-foreground cursor-pointer hover:bg-muted/80 transition-colors whitespace-nowrap"
                  >
                    <div className="flex items-center gap-1 sm:gap-2">
                      <span className="truncate">{column.label}</span>
                      <div className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0 flex items-center justify-center">
                        {sortKey === column.key &&
                          (sortOrder === "asc" ? <ChevronUp className="w-3 h-3 sm:w-4 sm:h-4" /> : <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4" />)}
                      </div>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filteredAndSorted.length === 0 ? (
                <tr>
                  <td colSpan={columns.length} className="px-4 py-8 text-center text-muted-foreground">
                    No models found
                  </td>
                </tr>
              ) : (
                filteredAndSorted.map((item, index) => (
                  <tr
                    key={item.Model}
                    className={`border-b border-border hover:bg-muted/50 transition-colors ${getMedalColor(
                      item.Model,
                      index,
                    )}`}
                  >
                    {columns.map((column) => (
                      <td key={column.key} className="px-2 sm:px-4 py-2 sm:py-3">
                        {column.key === "Model" ? (
                          <div className="flex items-center gap-1 sm:gap-2 min-w-0">
                            {topThree.has(item.Model) && <span className="flex-shrink-0">{getMedalEmoji(index)}</span>}
                            <span className="font-medium truncate">{item[column.key]}</span>
                          </div>
                        ) : (
                          <span className={column.isNumeric ? "font-mono text-xs sm:text-sm" : "text-xs sm:text-sm"}>
                            {typeof item[column.key] === "number"
                              ? (item[column.key] as number).toFixed(4)
                              : item[column.key]}
                          </span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
