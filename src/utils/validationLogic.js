export const checkValidData = (name, email, password) => {
  const isNameValid = /^[a-zA-Z\s'-]+$/.test(name);
  const isEmailValid = /^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/.test(
    email
  );

  const isPasswordValid =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      password
    );

  if (!isNameValid) return "Full Name is not valid !!!";
  if (!isEmailValid) return "Email ID is not valid !!!";
  if (!isPasswordValid) return "Password is not valid !!!";

  return null;
};

// 🔸 Form Validation Logic
