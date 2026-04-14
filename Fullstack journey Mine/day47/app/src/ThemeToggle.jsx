import { useTheme } from './ThemeContext';

function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <div style={{
      padding: "40px",
      textAlign: "center",
      backgroundColor: isDark ? "#1f1f1f" : "#f0f0f0",
      color: isDark ? "white" : "black",
      minHeight: "100vh"
    }}>
      <h2>Current Theme: {isDark ? "Dark" : "Light"}</h2>
      
      <button 
        onClick={toggleTheme}
        style={{
          padding: "12px 24px",
          fontSize: "18px",
          marginTop: "20px",
          cursor: "pointer"
        }}
      >
        Switch to {isDark ? "Light" : "Dark"} Mode
      </button>
    </div>
  );
}

export default ThemeToggle;