import css from './ErrorMessage.module.css'

type ErrorMessageProps = {
    message: string;
};

export default function ErrorMessage({message}:ErrorMessageProps){
    return (
    <>
    <p className={css.error}>Something went wrong 🙁</p>
    <p>{message}</p>
    </>)
}