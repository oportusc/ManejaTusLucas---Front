import { Password, PasswordProps } from "primereact/password"

export const InputPasswordMTL = (props: PasswordProps) => {
    return <Password {...props} autoComplete={props.id} inputClassName={`w-full h-[40px] rounded-md text-sm ${props.className}`} />
  };
  