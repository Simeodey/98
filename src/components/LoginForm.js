import styles from "./LoginForm.module.css";

export default function LoginForm() {
  return (
    <form className={styles.form}>
      <div>
        <label className={styles.label} htmlFor="name">
          Name
        </label>
        <input className={styles.input} name="name" />
      </div>
      <div>
        <label className={styles.label} htmlFor="password">
          Password
        </label>
        <input className={styles.input} name="password" />
      </div>
      <button className={styles.submit} type="submit">
        Submit
      </button>
    </form>
  );
}
