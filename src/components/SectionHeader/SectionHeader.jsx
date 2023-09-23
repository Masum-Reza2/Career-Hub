const SectionHeader = ({ title, desc }) => {
    return (
        <div className="text-center py-2 space-y-1">
            <h1 className="font-bold text-2xl">{title || 'title here'}</h1>
            <p className="text-sm">{desc || 'description here'}</p>
        </div>
    )
}

export default SectionHeader