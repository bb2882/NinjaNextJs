import Link from 'next/link'
import { useEffect } from 'react';
import { useRouter } from 'next/router'

const NotFound = () => {
	const router = useRouter();

	useEffect(() => {
		setTimeout(() => {
			// router.go(-1)
			router.push('/')
		}, 5000)
	}, [])

	return (
		<div className="not-found">
			<h1>Ooops...</h1>
			<h2>That Page Cannot Be Found</h2>
			<p>Go Back To The <Link href="/"><a>Homepage</a></Link></p>
			<p className='alert'>You Will Be Redirected To The Homepage after 5 sec...</p>
		</div>
	);
}

export default NotFound;