import { InputPasswordMTL } from "../../shared/components/InputPasswordMTL"
import { InputTextMTL } from "../../shared/components/InputTextMTL"

export const Login = () => {
  return (
    <>
      <main>
        <h1 className='text-center text-3xl mt-20'>Maneja Tus Lucas!!!</h1>
          <div className="mt-20 flex flex-col items-center">
            <InputTextMTL placeholder="hola" className="border-2 border-red-700 text-center w-[400px]" />
            <InputPasswordMTL
                    // value={field.value}
                    id='banco-password-cuenta'
                    placeholder='Ingresa la contraseña'
                    // onChange={field.onChange}
                    className='w-[400px]'
                    toggleMask={true}
                    feedback={false}
                  />
          </div>

      </main>

    </>
  )
}