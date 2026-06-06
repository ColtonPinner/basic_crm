import { Link } from 'expo-router';
import { Pressable, ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { BottomTabInset, MaxContentWidth, Spacing } from '@/constants/theme';

const metrics = [
  { value: '3.4x', label: 'faster lead-to-quote turnaround' },
  { value: '92%', label: 'policy follow-up completion rate' },
  { value: '1 view', label: 'for households, cases, and renewals' },
];

const featureCards = [
  {
    title: 'Household timeline',
    body: 'Keep beneficiaries, dependents, medical notes, and renewal milestones on one living record.',
  },
  {
    title: 'Advisor pipeline',
    body: 'Route every lead from intake to underwriting with stage-based tasks, reminders, and owner visibility.',
  },
  {
    title: 'Retention engine',
    body: 'Surface lapse risk early with renewal campaigns, review cadences, and cross-sell opportunities.',
  },
];

const workflowSteps = [
  'Capture inbound leads from web forms, referrals, and partner agencies.',
  'Qualify households, coverage gaps, and underwriting blockers in minutes.',
  'Automate review follow-ups so every renewal conversation happens on time.',
];

export default function HomeScreen() {
  return (
    <ThemedView style={styles.container}>
      <View style={styles.backgroundOrbTop} />
      <View style={styles.backgroundOrbBottom} />

      <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
          <ThemedView type="backgroundElement" style={styles.heroCard}>
            <View style={styles.badgeRow}>
              <ThemedText type="smallBold" style={styles.badgeText}>
                A CRM Built for what matters 
              </ThemedText>
              <ThemedText type="small" themeColor="textSecondary">
                Built for advisors, agencies, and policy service teams
              </ThemedText>
            </View>

            <View style={styles.heroGrid}>
              <View style={styles.heroCopy}>
                <ThemedText type="title" style={styles.heroTitle}>
                  Manage every family, policy, and renewal from one calm workflow.
                </ThemedText>

                <ThemedText style={styles.heroBody} themeColor="textSecondary">
                  Replace scattered spreadsheets and missed callbacks with a CRM designed for life insurance.
                  Track household relationships, automate follow-ups, and help advisors move from first
                  conversation to policy issued without losing context.
                </ThemedText>

                <View style={styles.ctaRow}>

                  <Pressable style={({ pressed }) => [styles.secondaryButton, pressed && styles.pressed]}>
                    <ThemedText type="smallBold">Book a demo</ThemedText>
                  </Pressable>
                </View>
              </View>

              <ThemedView style={styles.pipelinePanel}>
                <View style={styles.pipelineHeader}>
                  <View>
                    <ThemedText type="smallBold">Pipeline snapshot</ThemedText>
                    <ThemedText type="small" themeColor="textSecondary">
                      Monday morning advisor dashboard
                    </ThemedText>
                  </View>
                  <View style={styles.liveBadge}>
                    <View style={styles.liveDot} />
                    <ThemedText type="smallBold">Live</ThemedText>
                  </View>
                </View>

                <View style={styles.pipelineColumns}>
                  <View style={styles.pipelineColumn}>
                    <ThemedText type="smallBold">New leads</ThemedText>
                    <ThemedText type="subtitle" style={styles.pipelineValue}>
                      18
                    </ThemedText>
                    <ThemedText type="small" themeColor="textSecondary">
                      6 need same-day contact
                    </ThemedText>
                  </View>

                  <View style={styles.pipelineColumn}>
                    <ThemedText type="smallBold">In underwriting</ThemedText>
                    <ThemedText type="subtitle" style={styles.pipelineValue}>
                      11
                    </ThemedText>
                    <ThemedText type="small" themeColor="textSecondary">
                      3 waiting on APS records
                    </ThemedText>
                  </View>

                  <View style={styles.pipelineColumn}>
                    <ThemedText type="smallBold">Renewals due</ThemedText>
                    <ThemedText type="subtitle" style={styles.pipelineValue}>
                      27
                    </ThemedText>
                    <ThemedText type="small" themeColor="textSecondary">
                      9 high-value households this week
                    </ThemedText>
                  </View>
                </View>

                <ThemedView type="backgroundElement" style={styles.alertCard}>
                  <ThemedText type="smallBold">Attention needed</ThemedText>
                  <ThemedText type="small" themeColor="textSecondary">
                    Three households have expiring term coverage with no review meeting booked yet.
                  </ThemedText>
                </ThemedView>
              </ThemedView>
            </View>
          </ThemedView>

          <View style={styles.metricsRow}>
            {metrics.map((metric) => (
              <ThemedView key={metric.label} type="backgroundElement" style={styles.metricCard}>
                <ThemedText type="subtitle">{metric.value}</ThemedText>
                <ThemedText type="small" themeColor="textSecondary">
                  {metric.label}
                </ThemedText>
              </ThemedView>
            ))}
          </View>

          <View style={styles.sectionHeader}>
            <ThemedText type="subtitle" style={styles.sectionTitle}>
              Built for the realities of life insurance sales and service
            </ThemedText>
            <ThemedText style={styles.sectionBody} themeColor="textSecondary">
              Everything is structured around household context, advisor accountability, and long renewal
              cycles, so your team sees the whole relationship instead of isolated tasks.
            </ThemedText>
          </View>

          <View style={styles.featureGrid}>
            {featureCards.map((feature) => (
              <ThemedView key={feature.title} type="backgroundElement" style={styles.featureCard}>
                <ThemedText type="smallBold" style={styles.featureEyebrow}>
                  Included
                </ThemedText>
                <ThemedText type="subtitle" style={styles.featureTitle}>
                  {feature.title}
                </ThemedText>
                <ThemedText themeColor="textSecondary">{feature.body}</ThemedText>
              </ThemedView>
            ))}
          </View>

          <ThemedView style={styles.workflowSection}>
            <View style={styles.sectionHeader}>
              <ThemedText type="subtitle" style={styles.sectionTitle}>
                From lead intake to policy issued, the next step is always obvious
              </ThemedText>
              <ThemedText style={styles.sectionBody} themeColor="textSecondary">
                Give producers and service staff a shared system that keeps client promises visible.
              </ThemedText>
            </View>

            <View style={styles.workflowList}>
              {workflowSteps.map((step, index) => (
                <ThemedView key={step} type="backgroundElement" style={styles.workflowCard}>
                  <View style={styles.workflowIndex}>
                    <ThemedText type="smallBold" style={styles.workflowIndexText}>
                      0{index + 1}
                    </ThemedText>
                  </View>
                  <ThemedText style={styles.workflowText}>{step}</ThemedText>
                </ThemedView>
              ))}
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
  scrollContent: {
    alignSelf: 'center',
    width: '100%',
    maxWidth: MaxContentWidth + Spacing.six,
    paddingHorizontal: Spacing.three,
    paddingTop: Spacing.six + 72,
    paddingBottom: BottomTabInset + Spacing.six,
    gap: Spacing.four,
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
  heroCard: {
    borderRadius: 32,
    padding: Spacing.four,
    gap: Spacing.four,
  },
  badgeRow: {
    gap: Spacing.one,
  },
  badgeText: {
    textTransform: 'uppercase',
    letterSpacing: 1.2,
    color: '#3168FF',
  },
  heroGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.four,
  },
  heroCopy: {
    flex: 1,
    minWidth: 280,
    gap: Spacing.three,
  },
  heroTitle: {
    fontSize: 52,
    lineHeight: 58,
  },
  heroBody: {
    maxWidth: 560,
    fontSize: 18,
    lineHeight: 30,
  },
  ctaRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.two,
    paddingTop: Spacing.one,
  },
  primaryButton: {
    backgroundColor: '#3168FF',
    borderRadius: 999,
    paddingHorizontal: Spacing.four,
    paddingVertical: 14,
  },
  primaryButtonText: {
    color: '#FFFFFF',
  },
  secondaryButton: {
    borderWidth: 1,
    borderColor: 'rgba(96, 100, 108, 0.22)',
    borderRadius: 999,
    paddingHorizontal: Spacing.four,
    paddingVertical: 14,
    backgroundColor: 'rgba(255, 255, 255, 0.45)',
  },
  pipelinePanel: {
    minWidth: 280,
    maxWidth: 360,
    flex: 1,
    borderRadius: 28,
    padding: Spacing.three,
    backgroundColor: '#101727',
    gap: Spacing.three,
  },
  pipelineHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: Spacing.two,
  },
  liveBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 999,
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
  },
  liveDot: {
    width: 8,
    height: 8,
    borderRadius: 999,
    backgroundColor: '#40D39B',
  },
  pipelineColumns: {
    gap: Spacing.two,
  },
  pipelineColumn: {
    borderRadius: 20,
    padding: Spacing.three,
    backgroundColor: 'rgba(255, 255, 255, 0.06)',
    gap: Spacing.one,
  },
  pipelineValue: {
    color: '#FFFFFF',
  },
  alertCard: {
    borderRadius: 20,
    padding: Spacing.three,
    gap: Spacing.one,
    backgroundColor: '#F6F8FC',
  },
  metricsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.three,
  },
  metricCard: {
    flex: 1,
    minWidth: 180,
    borderRadius: 24,
    padding: Spacing.three,
    gap: Spacing.one,
  },
  sectionHeader: {
    gap: Spacing.two,
    maxWidth: 720,
  },
  sectionTitle: {
    maxWidth: 680,
  },
  sectionBody: {
    fontSize: 17,
    lineHeight: 28,
  },
  featureGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.three,
  },
  featureCard: {
    flex: 1,
    minWidth: 220,
    borderRadius: 24,
    padding: Spacing.three,
    gap: Spacing.two,
  },
  featureEyebrow: {
    textTransform: 'uppercase',
    letterSpacing: 1,
    color: '#2E8B75',
  },
  featureTitle: {
    fontSize: 28,
    lineHeight: 34,
  },
  workflowSection: {
    gap: Spacing.three,
  },
  workflowList: {
    gap: Spacing.two,
  },
  workflowCard: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.three,
    borderRadius: 24,
    padding: Spacing.three,
  },
  workflowIndex: {
    width: 52,
    height: 52,
    borderRadius: 16,
    backgroundColor: '#3168FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  workflowIndexText: {
    color: '#FFFFFF',
  },
  workflowText: {
    flex: 1,
    fontSize: 18,
    lineHeight: 28,
  },
  pressed: {
    opacity: 0.85,
  },
});
