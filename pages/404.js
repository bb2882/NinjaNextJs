import Link from 'next/link'

const NotFound = () => {
	return (
		<div className="not-found">
			<h1>Ooops...</h1>
			<h2>That Page Cannot Be Found</h2>
			<p>Go Back To The <Link href="/"><a>Homepage</a></Link></p>
		</div>
	);
}

export default NotFound;