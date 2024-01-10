import ProfileContainer from '@components/ProfileContainer';
// import SkillContainer from '../SkillContainer';
import EducationContainer from '@components/EducationContainer';

export default function AboutContent() {
	return (
		<section className="inner flex flex-wrap justify-center gap-20 pt-10 pb-20 text-2xl">
			<ProfileContainer />
			{/* <SkillContainer /> */}
			<EducationContainer />
		</section>
	);
}
