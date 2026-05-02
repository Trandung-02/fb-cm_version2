'use client'

type CustomCheckboxProps = {
    id: string
    checked: boolean
    onCheckedChange: (checked: boolean) => void
    invalid?: boolean
    'aria-describedby'?: string
}

/** Ô kiểm tùy biến (không bọc <label> — để nhãn nằm ở component cha, tránh label lồng nhau). */
export default function CustomCheckbox({ id, checked, onCheckedChange, invalid, 'aria-describedby': ariaDescribedby }: CustomCheckboxProps) {
    return (
        <>
            <input
                id={id}
                type="checkbox"
                className="sr-only"
                checked={checked}
                onChange={(e) => onCheckedChange(e.target.checked)}
                aria-invalid={invalid ?? false}
                aria-describedby={ariaDescribedby}
            />
            <span
                aria-hidden
                className={`inline-flex h-[16px] w-[16px] shrink-0 items-center justify-center rounded-[4px] border transition-all duration-200 ${checked ? 'border-blue-600 bg-blue-600' : 'border-gray-300 bg-white'}`}
            >
                {checked ? (
                    <svg className="h-[12px] w-[12px] text-white" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                ) : null}
            </span>
        </>
    )
}
