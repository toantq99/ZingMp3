import * as Yup from "yup";
export const SignupSchema = Yup.object().shape({
	username: Yup.string()
		.required("Tên đăng nhập không được để trống")
		.max(15, "Tên đăng nhập tối đa 15 ký tự")
		.min(3, "Tên đăng nhập tối thiểu 3 ký tự")
		.lowercase("Tên đăng nhập không được viết hoa")
		.matches(/^[a-z]/, "Tên đăng nhập phải bắt đầu bằng chữ cái"),
	password: Yup.string()
		.required("Mật khẩu không được để trống")
		.max(32, "Mật khẩu tối đa 32 ký tự")
		.min(5, "Mật khẩu tối thiểu 5 ký tự")
		.matches(
			/^(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{5,32}$/,
			"Mật khẩu phải chứa ít nhất một số và một ký tự viết hoa"
		),
	fullName: Yup.string().required("Họ và tên không được để trống"),
	email: Yup.string()
		.required("Mật khẩu không được để trống")
		.email("Email không hợp lệ"),
});

export const LoginSchema = Yup.object().shape({
	username: Yup.string().required("Tên đăng nhập không được để trống"),
	password: Yup.string().required("Mật khẩu không được để trống"),
});
