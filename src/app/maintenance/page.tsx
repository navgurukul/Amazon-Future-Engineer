export default function ComingSoonPage() {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          fontFamily: 'Amazon Ember, Arial, sans-serif',
          backgroundColor: '#F7F7F7',
          color: '#2e2e2e',
          textAlign: 'center',
          padding: '1rem',
        }}
      >
        <div>
          <h1
            style={{
              fontSize: '3em',
              marginBottom: '0.5em',
              color: '#29458c', // Using 'midnight-blue-main' color
            }}
          >
            Exciting Things Are Coming!
          </h1>
          <p style={{ fontSize: '1.5em', color: '#666' }}>
            We're working hard to bring you a fantastic experience. Stay tuned for something amazing!
          </p>
          <p style={{ fontSize: '1.2em', color: '#049796' }}>Launching Soon</p>
        </div>
      </div>
    );
  }
  