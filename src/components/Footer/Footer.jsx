import React from "react";

export default function Footer() {
	return (
		<div className="bg-dark" style={{ padding: 20 }}>
			<div className="container d-flex justify-ar align-center">
				<div style={{ width: 315 }} className="d-flex align-center	">
					<img
						src="https://static-zmp3.zadn.vn/skins/zmp3-v5.1/images/icon_zing_mp3_60.png"
						alt="logo"
						width={56}
						height={56}
						style={{ float: "left", marginRight: 20 }}
					/>
					<div className="text-gray text-small">
						<div>© 2015 VNG Corporation</div>
						<div>Giấy phép MXH số 314/GP-BTTTT.</div>
					</div>
				</div>
				<div
					style={{
						width: 400,
						flexWrap: "wrap",
						display: "grid",
						gridTemplateColumns: "auto auto auto auto",
					}}
				>
					{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
						<div key={item} style={{ lineHeight: 2 }} className="text-small">
							Giới thiệu
						</div>
					))}
				</div>

				<div style={{ textAlign: "right" }}>
					<div>
						{[1, 2, 3, 4].map((item) => (
							<img
								key={item}
								src="https://www.iconninja.com/files/387/198/566/logo-social-fb-facebook-icon.svg"
								alt="social"
								width={34}
								heigh={34}
								style={{ margin: 5 }}
							/>
						))}
					</div>
					<div>
						<img
							src="//images.dmca.com/Badges/dmca_protected_sml_120n.png?ID=62f851ba-0cde-4801-8326-68a6d66bf97a"
							alt="DMCA.com Protection Status"
						/>
					</div>
					<div className="text-small">Phiên bản Mobile</div>
				</div>
			</div>
		</div>
	);
}
