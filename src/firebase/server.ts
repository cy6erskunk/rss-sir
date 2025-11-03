import admin from 'firebase-admin';
import type { ServiceAccount } from 'firebase-admin';

// Construct the credentials object from environment variables
const serviceAccount = {
    project_id: import.meta.env.FIREBASE_PROJECT_ID,
    private_key_id: import.meta.env.FIREBASE_PRIVATE_KEY_ID,
    private_key: (import.meta.env.FIREBASE_PRIVATE_KEY || '').replace(/\\n/g, '\n'), // Replace escaped newlines
    client_email: import.meta.env.FIREBASE_CLIENT_EMAIL,
    client_id: import.meta.env.FIREBASE_CLIENT_ID,
    auth_uri: import.meta.env.FIREBASE_AUTH_URI,
    token_uri: import.meta.env.FIREBASE_TOKEN_URI,
    auth_provider_x509_cert_url: import.meta.env.FIREBASE_AUTH_PROVIDER_X509_CERT_URL,
    client_x509_cert_url: import.meta.env.FIREBASE_CLIENT_X509_CERT_URL,
    universe_domain: "googleapis.com"
};

let db: admin.firestore.Firestore | null = null;

try {
    // Initialize Firebase Admin SDK only if it hasn't been initialized yet
    if (!admin.apps.length) {
        admin.initializeApp({
            credential: admin.credential.cert(serviceAccount as ServiceAccount)
        });
    }
    db = admin.firestore();

} catch (error) {
    console.error("Firebase admin initialization error", error);
}


export { db };