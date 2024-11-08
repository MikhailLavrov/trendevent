import { useForm, SubmitHandler } from "react-hook-form"
import { useEffect, useState } from "react";
import c from './CallbackForm.module.css';
import { PrivacyModal } from "../PrivacyModal/PrivacyModal";
import { personalAgreement } from "../../data/privacyData";
import { sendOrder } from "../../utils/SendOrder";

interface FormData {
  name: string;
  phone: string;
  callbackAgreement: boolean;
}

export const CallbackForm = () => { 
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<FormData>({
    mode: 'onChange',
  })

  const [ isSubmitted, setIsSubmitted ] = useState(false);

  useEffect(() => {
    let isSubmittedSession = sessionStorage.getItem('submitted');
    if (isSubmittedSession === 'true') {
      setIsSubmitted(true)
    }
  }, []);
  
  const onSubmit: SubmitHandler<FormData> = (data) => {
    let message = `Заявка на обратный звонок\n Имя: ${data.name}\n Телефон: ${data.phone}\n`;
    
    sessionStorage.setItem('submitted', 'true');
    setIsSubmitted(true);
    sendOrder({message});
    reset();
  }

  return (
  <div className={c.callback}>
    {
      isSubmitted ? (
        <div className={c.callback__submitCover}>
          <h2 className={c.callback__submitTitle}>Заявка отправлена!</h2>
          <p className={c.callback__submitSubtitle}>Мы вам перезвоним</p>
        </div>
      )
    : <>
      <div className={c.formHeader}>
        <p className={c.formHeader__title}>Нужно оформление воздушными шарами?</p>
        <p className={c.formHeader__subtitle}>Оставьте свои контакты, мы свяжемся с вами.</p>
      </div>
      <form 
        onSubmit={handleSubmit(onSubmit)}
        className={c.form}
        autoComplete='false'
      >
        <label>
          <input
          {...register("name", { 
            required: 'Заполните поле', 
            pattern: {
              value: /^[a-zA-Zа-яА-Я\s]+$/,
              message: 'Имя может состоять только из букв'
            },
            minLength: {
              value: 2,
              message: 'Минимум 2 символа'
            },
            maxLength: {
              value: 30,
              message: 'Максимум 30 символов'
            }
          })}
            placeholder='Ваше имя*'
          />
          {errors?.name && <span className={c.form__error}>{errors?.name?.message || 'Заполните поле'}</span>}
        </label>

        <label>
          <input
            {...register("phone", { 
              required: 'Заполните поле',
              minLength: {
                value: 7,
                message: 'Минимум 7 символов'
              },
              maxLength: {
                value: 30,
                message: 'Максимум 30 символов'
              }
            })}
              placeholder='Телефон или E-mail*'
            />
          {errors?.phone && <span className={c.form__error}>{errors?.phone?.message || 'Заполните поле'}</span>}
        </label>

        <label htmlFor="callbackAgreement" className={c.form__agreementLabel}>
          <input 
            type="checkbox"
            id='callbackAgreement'
            {...register("callbackAgreement", { 
              required: 'Необходимо подтверждение',
            }
          )} />
          Соглашаюсь на 
          <PrivacyModal
            buttonName={'обработку персональных данных'}
            title={'Пользовательское соглашение'}
            text={personalAgreement}
          />
          {errors?.callbackAgreement && <span className={c.form__error}>{errors?.callbackAgreement?.message || 'Необходимо подтверждение'}</span>}
        </label>

        <input className={c.submitButton} type="submit" disabled={!isValid} />
      </form>
    </>
    }
  </div>
  )
}