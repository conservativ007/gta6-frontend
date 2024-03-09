import { SubmitHandler, useForm } from 'react-hook-form'
import styles from './Home.module.scss'

interface IFormState {
	name: string
	email: string
}

function Home() {
	const isSuccess = false

	const { register, handleSubmit } = useForm<IFormState>()

	const onSubmit: SubmitHandler<IFormState> = data => {
		console.log(data)
	}

	return (
		<div className={styles.wrapper}>
			<form onSubmit={handleSubmit(onSubmit)}>
				{isSuccess ? (
					<div className={styles.success}>The form sent</div>
				) : (
					<>
						<h1>GTA 6 - Оставь заявку</h1>
						<input
							type='email'
							placeholder='Enter email:'
							{...register('email')}
						/>
						<input
							type='name'
							placeholder='Enter name:'
							{...register('name')}
						/>
						<button>Want GTA-6</button>
					</>
				)}
			</form>
		</div>
	)
}

export default Home
