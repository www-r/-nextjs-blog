import Page from '@components/Page';
import Icon from '@components/Icon';
import EmailForm from '@/components/EmailForm';
import github from '@/assets/github-mark.png';
import tistory from '@/assets/logomark.png';
export default function ContactPage() {
	return (
		<Page>
			<div className="flex-cols items-center">
				<h3>Contact me</h3>
				<p>inmein@naver.com</p>
				<p>jessicak0828@gmail.com</p>
				<div className="flex">
					<Icon src={github} alt="github" />
					<Icon src={tistory} alt="tistory" size={40} />
				</div>
			</div>
			<div className="flex-cols items-center">
				<h3>Or Send me an email</h3>
				<EmailForm />
			</div>
		</Page>
	);
}
