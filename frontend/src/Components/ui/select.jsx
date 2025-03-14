export function Select({ children, className, ...props }) {
    return <select className={`border border-gray-300 p-2 rounded-md ${className}`} {...props}>{children}</select>;
  }
  
  export function SelectItem({ value, children }) {
    return <option value={value}>{children}</option>;
  }
  