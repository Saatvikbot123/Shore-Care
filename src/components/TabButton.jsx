export default function TabButton({ children, isSelected, ...props}) {

    return (
      <li>
        <button className={isSelected ? "active" : undefined} {...props}>
          {children}
        </button>
      </li>
    );
}
//OR
//export default function TabButton({children}) {
//    return <li><button>{children}</button></li>
//}