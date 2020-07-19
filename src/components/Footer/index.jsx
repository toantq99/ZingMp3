import React from "react";
import { Row, Col } from "antd";
import "./style.scss";

export default function Footer() {
	return (
		<div className="bg-dark">
			<div className="wrapper wrapper-footer">
				<Row>
					<Col span={8}>
						<Col span={6}>
							<img
								src="https://static-zmp3.zadn.vn/skins/zmp3-v5.1/images/icon_zing_mp3_60.png"
								alt="logo"
								className="logo-footer"
							/>
						</Col>
						<Col span={18}>
							<div className="text-gray text-small">
								<div>© 2015 VNG Corporation</div>
								<div>Giấy phép MXH số 314/GP-BTTTT.</div>
							</div>
						</Col>
					</Col>
					<Col span={8}>
						<Row gutter={16}>
							{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
								<Col
									span={6}
									key={item}
									style={{ lineHeight: 2 }}
									className="text-small"
								>
									Giới thiệu
								</Col>
							))}
						</Row>
					</Col>

					<Col span={8} style={{ textAlign: "right" }}>
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
					</Col>
				</Row>
			</div>
		</div>
	);
}
