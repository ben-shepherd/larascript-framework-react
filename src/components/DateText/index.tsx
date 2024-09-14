const DateText = ({ date = new Date(), className = '' }: { date?: Date, className?: string }) => {
    return (
        <div className={`date_text ${className}`}>
            {new Intl.DateTimeFormat('en-US', { month: 'long', day: 'numeric', year: 'numeric' }).format(date)}
        </div>
    )
}

export default DateText