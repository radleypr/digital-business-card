import CTA from './CTA';
import profileImg from '../images/profile-img.jpg';
function Profile() {
	return (
		<div className='profile'>
			<div className='profile-img'>
				<img src={profileImg} alt='profile-img' />
			</div>
			<div className='profile-info'>
				<p className='profile-name'>Reno A. Prawoto</p>
				<p className='profile-occupation'>Co-Founder & CTO</p>
				<p className='profile-website'>
					<a target='_blank' rel='noreferrer' href='https://themoonlab.co'>
						themoonlab.co
					</a>
				</p>
			</div>

			<CTA />
		</div>
	);
}
export default Profile;
