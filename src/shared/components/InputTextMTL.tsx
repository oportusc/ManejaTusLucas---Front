import { InputText, InputTextProps } from "primereact/inputtext"

export const InputTextMTL = (props: InputTextProps) => {
  return <InputText {...props} autoComplete={props.id} className={`w-full h-[40px] rounded-md text-sm ${props.className}`}   />
}
