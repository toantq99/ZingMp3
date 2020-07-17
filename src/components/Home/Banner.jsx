import React from "react";

export default function Banner() {
	return (
		<div className="col-0">
			<img
				src="https://photo-zmp3.zadn.vn/banner/e/5/9/c/e59c3dd3f6db59d63a3a180fad5e5627.jpg"
				alt="main-banner"
				height={273}
				width={650}
			/>
			<div className="d-flex justify-bw" style={{ width: 650 }}>
				{[1, 2, 3, 4, 5].map((item) => (
					<img
						src="https://photo-zmp3.zadn.vn/banner/e/5/9/c/e59c3dd3f6db59d63a3a180fad5e5627.jpg"
						alt="banner"
						key={item}
						width={120}
						height={50}
					/>
				))}
			</div>
		</div>
	);
}
