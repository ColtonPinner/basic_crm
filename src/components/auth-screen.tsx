import { useState } from 'react';
import {
  ActivityIndicator,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';

import { authClient } from '@/auth/auth';
import { BottomTabInset, MaxContentWidth, Spacing } from '@/constants/theme';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

type AuthMode = 'sign-in' | 'sign-up';

export function AuthScreen() {
  const [mode, setMode] = useState<AuthMode>('sign-in');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const isSignUp = mode === 'sign-up';

  const handleSubmit = async () => {
    setError(null);
    setLoading(true);

    try {
      if (isSignUp) {
        await authClient.signUp.email({
          name,
          email,
          password,
        });
      } else {
        await authClient.signIn.email({
          email,
          password,
        });
      }

      setName('');
      setEmail('');
      setPassword('');
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Authentication failed.';
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ThemedView style={styles.container}>
      <View style={styles.backgroundOrbTop} />
      <View style={styles.backgroundOrbBottom} />

      <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
          <ThemedView type="backgroundElement" style={styles.card}>
            <View style={styles.copyBlock}>
              <ThemedText type="smallBold" style={styles.eyebrow}>
                Better Auth powered access
              </ThemedText>
              <ThemedText type="title" style={styles.title}>
                Sign in to Basic CRM.
              </ThemedText>
              <ThemedText themeColor="textSecondary" style={styles.body}>
                Use your Better Auth backend to create accounts, sign in, and keep the app locked until a
                valid session exists.
              </ThemedText>
            </View>

            <View style={styles.toggleRow}>
              <Pressable
                onPress={() => setMode('sign-in')}
                style={({ pressed }) => [styles.toggleButton, !isSignUp && styles.toggleButtonActive, pressed && styles.pressed]}>
                <ThemedText type="smallBold" style={!isSignUp && styles.toggleButtonTextActive}>
                  Sign in
                </ThemedText>
              </Pressable>
              <Pressable
                onPress={() => setMode('sign-up')}
                style={({ pressed }) => [styles.toggleButton, isSignUp && styles.toggleButtonActive, pressed && styles.pressed]}>
                <ThemedText type="smallBold" style={isSignUp && styles.toggleButtonTextActive}>
                  Create account
                </ThemedText>
              </Pressable>
            </View>

            <View style={styles.form}>
              {isSignUp && (
                <View style={styles.field}>
                  <ThemedText type="smallBold">Name</ThemedText>
                  <TextInput
                    value={name}
                    onChangeText={setName}
                    placeholder="Taylor Advisor"
                    placeholderTextColor="#8A93A3"
                    style={styles.input}
                    autoCapitalize="words"
                  />
                </View>
              )}

              <View style={styles.field}>
                <ThemedText type="smallBold">Email</ThemedText>
                <TextInput
                  value={email}
                  onChangeText={setEmail}
                  placeholder="advisor@basiccrm.com"
                  placeholderTextColor="#8A93A3"
                  style={styles.input}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  autoCorrect={false}
                />
              </View>

              <View style={styles.field}>
                <ThemedText type="smallBold">Password</ThemedText>
                <TextInput
                  value={password}
                  onChangeText={setPassword}
                  placeholder="••••••••"
                  placeholderTextColor="#8A93A3"
                  style={styles.input}
                  secureTextEntry
                />
              </View>

              {error ? (
                <ThemedView type="backgroundElement" style={styles.errorBox}>
                  <ThemedText type="smallBold" style={styles.errorTitle}>
                    Authentication error
                  </ThemedText>
                  <ThemedText themeColor="textSecondary" style={styles.errorText}>
                    {error}
                  </ThemedText>
                </ThemedView>
              ) : null}

              <Pressable
                onPress={handleSubmit}
                disabled={loading}
                style={({ pressed }) => [styles.submitButton, pressed && styles.pressed, loading && styles.submitButtonDisabled]}>
                {loading ? (
                  <ActivityIndicator color="#FFFFFF" />
                ) : (
                  <ThemedText type="smallBold" style={styles.submitButtonText}>
                    {isSignUp ? 'Create account' : 'Sign in'}
                  </ThemedText>
                )}
              </Pressable>

              <ThemedText themeColor="textSecondary" style={styles.helperText}>
                Set EXPO_PUBLIC_BETTER_AUTH_URL to your auth backend before using this screen.
              </ThemedText>
            </View>
          </ThemedView>
        </ScrollView>
      </SafeAreaView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  safeArea: {
    flex: 1,
  },
  content: {
    alignSelf: 'center',
    width: '100%',
    maxWidth: MaxContentWidth + Spacing.six,
    paddingHorizontal: Spacing.three,
    paddingTop: Spacing.six + 48,
    paddingBottom: BottomTabInset + Spacing.six,
  },
  backgroundOrbTop: {
    position: 'absolute',
    top: -80,
    right: -40,
    width: 220,
    height: 220,
    borderRadius: 999,
    backgroundColor: 'rgba(49, 104, 255, 0.14)',
  },
  backgroundOrbBottom: {
    position: 'absolute',
    bottom: 80,
    left: -60,
    width: 180,
    height: 180,
    borderRadius: 999,
    backgroundColor: 'rgba(56, 201, 170, 0.12)',
  },
  card: {
    borderRadius: 32,
    padding: Spacing.four,
    gap: Spacing.four,
  },
  copyBlock: {
    gap: Spacing.two,
  },
  eyebrow: {
    textTransform: 'uppercase',
    letterSpacing: 1.1,
    color: '#3168FF',
  },
  title: {
    fontSize: 46,
    lineHeight: 52,
    maxWidth: 560,
  },
  body: {
    fontSize: 17,
    lineHeight: 28,
    maxWidth: 620,
  },
  toggleRow: {
    flexDirection: 'row',
    gap: Spacing.two,
  },
  toggleButton: {
    borderRadius: 999,
    borderWidth: 1,
    borderColor: 'rgba(96, 100, 108, 0.22)',
    paddingHorizontal: Spacing.four,
    paddingVertical: 12,
    backgroundColor: 'rgba(255, 255, 255, 0.55)',
  },
  toggleButtonActive: {
    backgroundColor: '#101727',
    borderColor: '#101727',
  },
  toggleButtonTextActive: {
    color: '#FFFFFF',
  },
  form: {
    gap: Spacing.three,
  },
  field: {
    gap: Spacing.one,
  },
  input: {
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'rgba(96, 100, 108, 0.18)',
    backgroundColor: 'rgba(255, 255, 255, 0.78)',
    color: '#101727',
    paddingHorizontal: Spacing.four,
    paddingVertical: 14,
    fontSize: 16,
  },
  errorBox: {
    borderRadius: 20,
    padding: Spacing.three,
    gap: Spacing.one,
  },
  errorTitle: {
    color: '#C0392B',
  },
  errorText: {
    lineHeight: 22,
  },
  submitButton: {
    backgroundColor: '#3168FF',
    borderRadius: 999,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
  },
  submitButtonDisabled: {
    opacity: 0.75,
  },
  submitButtonText: {
    color: '#FFFFFF',
  },
  helperText: {
    fontSize: 13,
    lineHeight: 20,
  },
  pressed: {
    opacity: 0.85,
  },
});