export default function CardTotal({ title, value, icon, isPlus }: { title: string, value: string, icon: React.ReactNode, isPlus: boolean }) {
    return (
        <div className="rounded-lg bg-white/10 p-4 backdrop-blur-sm">
                  {/* <Users className="mb-2 h-8 w-8 text-cyan-300" /> */}
                  {icon}
                  <div className="text-2xl font-bold text-white">{value} {isPlus && '+'}</div>
                  <div className="text-sm text-blue-100">{title}</div>
                </div>
    )
}