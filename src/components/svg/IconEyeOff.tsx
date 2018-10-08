import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

interface PropTypes {
	width: number;
	height: number;
}

const IconEyeOff = (props: PropTypes) => (
	<Svg width={props.width} height={props.height} viewBox='0 0 43 39'>
		<Path
			d='M40.9240101,19.9338607 C38.6698769,22.7792516 35.7506262,25.1332522 32.4821331,26.7403103 C31.5545276,27.1959233 30.6076434,27.5887435 29.6429634,27.9224217 C32.1254758,25.7239428 33.6892807,22.5383024 33.6892807,19 C33.6892807,15.4595071 32.1239928,12.2716763 29.6392559,10.0731974 C30.6054189,10.4076057 31.5530446,10.8026164 32.4821331,11.2589595 C35.7506262,12.8660176 38.6698769,15.2192881 40.9240101,18.0654092 C41.3592654,18.6159416 41.3592654,19.3840584 40.9240101,19.9338607 M21.5006488,29.2797688 C15.7437113,29.2797688 11.0611946,24.6681472 11.0611946,19 C11.0611946,13.3318528 15.7437113,8.72023121 21.5006488,8.72023121 C27.2568448,8.72023121 31.940103,13.3318528 31.940103,19 C31.940103,24.6681472 27.2568448,29.2797688 21.5006488,29.2797688 M10.518423,26.7403103 C7.24992995,25.1332522 4.3306792,22.7792516 2.07654603,19.9338607 C1.64129071,19.3840584 1.64129071,18.6159416 2.07654603,18.0654092 C4.3306792,15.2200183 7.24992995,12.8660176 10.518423,11.2596897 C11.44677,10.8033465 12.3951372,10.4083359 13.3605587,10.0746577 C10.8773048,12.2731366 9.31127541,15.4595071 9.31127541,19 C9.31127541,22.5397627 10.8773048,25.7268634 13.3613002,27.9253423 C12.3951372,27.5916641 11.4475115,27.1966535 10.518423,26.7403103 M42.3031837,17.006693 C39.8896299,13.9590508 36.7642446,11.4393064 33.2636648,9.718345 C29.6904188,7.96160633 25.8457871,7.04965014 21.8328369,7.00219045 C21.7223547,6.99926985 21.2782015,6.99926985 21.1677193,7.00219045 C17.154769,7.04965014 13.3108788,7.96160633 9.73689134,9.718345 C6.237053,11.4393064 3.11092622,13.9590508 0.697372448,17.006693 C-0.232457483,18.1800426 -0.232457483,19.8199574 0.697372448,20.993307 C3.11092622,24.040219 6.237053,26.5606936 9.73689134,28.281655 C13.3108788,30.0383937 17.154769,30.9496197 21.1677193,30.9978096 C21.2782015,31.0007301 21.7223547,31.0007301 21.8328369,30.9978096 C25.8457871,30.9496197 29.6904188,30.0383937 33.2636648,28.281655 C36.7642446,26.5606936 39.8896299,24.040219 42.3031837,20.993307 C43.2322721,19.8192273 43.2322721,18.1800426 42.3031837,17.006693'
			id='Fill-1'
			fill='#00D2FF'
		/>
		<Path
			d='M21.5,21.2380913 C19.9905394,21.2380913 18.7619087,20.0094606 18.7619087,18.5 C18.7619087,16.9905394 19.9905394,15.7619087 21.5,15.7619087 C23.0094606,15.7619087 24.2380913,16.9905394 24.2380913,18.5 C24.2380913,20.0094606 23.0094606,21.2380913 21.5,21.2380913 M21.5,14 C19.0188382,14 17,16.0188382 17,18.5 C17,20.9811618 19.0188382,23 21.5,23 C23.9811618,23 26,20.9811618 26,18.5 C26,16.0188382 23.9811618,14 21.5,14'
			id='Fill-4'
			fill='#00D2FF'
		/>
		<Path d='M32.5,0.5 L11.5,36.5' id='Line-3' stroke='#00D2FF' strokeWidth='2' strokeLinecap='round' fillRule='nonzero' />
	</Svg>
);

export default IconEyeOff;
