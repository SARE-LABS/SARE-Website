
export const Tags = () => {
    const tags = ['Set up Git and GitHub with your IDE', 'Push and pull code effortlessly', 'Understand branches']
    return (
        <div className="flex gap-4 flex-col md:flex-row">
            {
                tags.map((tag, index) => (
                    <span key={index} className="py-1 px-4 border-2 border-[#67B5DC] rounded-full w-max text-[12px]">{tag}</span>
                ))
            }
        </div>
    )
}
