import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthModal = ({ setShowModal, isSignUp, setAuthToken, setUserId }) => {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [confirmPassword, setConfirmPassword] = useState(null);
    const [error, setError] = useState(null);

    let navigate = useNavigate();

    const handleClick = () => {
        setShowModal(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (isSignUp && (password !== confirmPassword)) {
            setError('Passwords need to match!');
            return;
        }

        // Simulating server response
        const fakeResponse = {
            status: 201,
            data: {
                token: 'fake-auth-token',
                userId: 'fake-user-id'
            }
        };

        setAuthToken(fakeResponse.data.token);
        setUserId(fakeResponse.data.userId);

        const success = fakeResponse.status === 201;
        if (success && isSignUp) navigate('/onboarding');
        if (success && !isSignUp) navigate('/dashboard');

        window.location.reload();
    };

    return (
        <div className="auth-modal">
            <div className="close-icon" onClick={handleClick}>ⓧ</div>

            <h2>{isSignUp ? 'CREATE ACCOUNT' : 'LOG IN'}</h2>
            <p>By clicking Log In, you agree to our terms. Learn how we process your data in our Privacy Policy and Cookie Policy.</p>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="email"
                    required={true}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="password"
                    required={true}
                    onChange={(e) => setPassword(e.target.value)}
                />
                {isSignUp && <input
                    type="password"
                    id="password-check"
                    name="password-check"
                    placeholder="confirm password"
                    required={true}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />}
                <input className="secondary-button" type="submit" />
                <p>{error}</p>
            </form>

            <hr />
            <h2>GET THE APP</h2>
        </div>
    );
};

export default AuthModal;
