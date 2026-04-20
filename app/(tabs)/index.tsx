import { MaterialIcons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import { Linking, Pressable, StyleSheet, Text, View } from 'react-native';

import {
  AnimatedPanel,
  AnimatedProgress,
  AnimatedReveal,
  BrandHeader,
  Chip,
  FooterSignature,
  Metric,
  Panel,
  PortfolioScreen,
  PortfolioSection,
  PrimaryButton,
  RemoteImage,
  SecondaryButton,
  SectionTitle,
  portfolioColors,
  portfolioImages,
  portfolioText,
  scrollToPortfolioSection,
  usePortfolioLayout,
} from '@/components/portfolio';

const resumeUrl = '/Mark%20Emil%20Sarmiento%20-%20Application.pdf';

const projects = [
  {
    title: 'EM CAPITAL',
    label: 'CRYPTO_CRM',
    description:
      'A crypto CRM platform with real-time portfolio tracking, lead management, and global market monitoring — integrated with the CoinGecko API and deployed on Vercel.',
    image: portfolioImages.emCapital,
    stack: ['REACT.JS', 'TYPESCRIPT', 'COINGECKO_API', 'VERCEL'],
    url: 'https://crypto-management-nine.vercel.app/',
  },
  {
    title: 'PROPERTY MANAGEMENT',
    label: 'PROPERTY_MGMT',
    description:
      'A mobile app for homeowners to manage their property — pay mortgages and bills, request maintenance services like lawn mowing or repairs, and keep all property documents organized in one place.',
    image: portfolioImages.propertyManagement,
    stack: ['REACT_NATIVE', 'IOS', 'ANDROID', 'MOBILE'],
    url: 'https://drive.google.com/file/d/140GuTU_nntoxvkyE5UpTehJMbN_sjVO8/view?usp=drive_link',
  },
];

const timeline = [
  {
    years: '05/2025 — CURRENT',
    role: 'Senior Software Engineer',
    company: 'SVEN',
    chips: ['REACT.JS', 'REACT_NATIVE'],
    bullets: [
      'Built responsive web applications with React.js for production use.',
      'Developed mobile apps with Flutter and React Native for iOS and Android.',
      'Handled App Store releases while maintaining platform compliance.',
    ],
  },
  {
    years: '03/2022 — 05/2025',
    role: 'Senior Software Engineer',
    company: 'TopApps Inc.',
    chips: ['FLUTTER', 'XCODE'],
    bullets: [
      'Improved performance and reduced load times through efficient coding practices.',
      'Worked in agile delivery cycles with backend developers and mentored junior engineers.',
      'Used React.js, Flutter, React Native, Xcode, Android Studio, and Git in delivery work.',
    ],
  },
  {
    years: '10/2021 — 03/2022',
    role: 'Software Engineer',
    company: 'Hooli Software',
    chips: ['UI', 'WIREFRAMES'],
    bullets: [
      'Turned design mockups and wireframes into interactive and user-friendly interfaces.',
    ],
  },
  {
    years: '02/2020 — 09/2021',
    role: 'Software Developer',
    company: 'The Nerds Solutions',
    chips: ['REACT.JS', 'SPRING_BOOT'],
    bullets: [
      'Built websites with React JS in a fast-paced development environment.',
      'Worked with designers, UI/UX specialists, and backend developers to ship features.',
      'Contributed Java Spring Boot backend work and reusable UI components with Redux.',
    ],
  },
];

const frontendSkills = [
  ['React.js', 'EXPERT', 0.95, 'data-object'],
  ['React Native', 'EXPERT', 0.92, 'smartphone'],
  ['Flutter', 'ADVANCED', 0.9, 'rocket-launch'],
  ['Java Spring Boot', 'WORKING_EXP', 0.65, 'dns'],
];

const toolCards = [
  ['Xcode', 'IOS_RELEASES', 'APP_STORE', 'SUBMISSIONS', 'phone-iphone'],
  ['Redux', 'STATE_MGMT', 'REACT', 'UI_COMPONENTS', 'layers'],
  ['Git', 'VERSION_CONTROL', 'AGILE', 'TEAM_WORKFLOWS', 'account-tree'],
];

export default function HomeScreen() {
  const { isDesktop, isTablet, isMobile } = usePortfolioLayout();

  return (
    <PortfolioScreen>
      <PortfolioSection id="home">
        <View style={[styles.heroRow, isDesktop ? styles.heroRowDesktop : null]}>
          <AnimatedReveal style={styles.heroMain}>
            <BrandHeader
              eyebrow="Full Stack Developer"
              title="Mark Emil"
              accent=" Sarmiento."
              description="Full stack developer building web and mobile products with React.js, React Native, Flutter, and Java Spring Boot — focused on quality delivery and collaborative engineering."
            />

          <View
            style={[
              styles.heroActions,
              isTablet ? styles.heroActionsWide : null,
              isMobile ? styles.heroActionsMobile : null,
            ]}>
            <View style={styles.buttonWrap}>
              <PrimaryButton
                label="Contact Me"
                onPress={() => scrollToPortfolioSection('contact')}
              />
            </View>
            <View style={styles.buttonWrap}>
              <SecondaryButton
                label="Download Resume"
                onPress={() => Linking.openURL(resumeUrl)}
              />
            </View>
          </View>
          </AnimatedReveal>

          <AnimatedPanel delay={140} style={[styles.metaCard, isDesktop ? styles.metaCardDesktop : null]}>
            <View>
              <Text style={styles.metaLabel}>01 / CORE PHILOSOPHY</Text>
              <Text style={styles.metaCopy}>
                Committed to quality performance, strategic execution, and empowering the teams I work with.
              </Text>
            </View>
            <View>
              <Text style={styles.metaLabel}>02 / CONTACT</Text>
              <Text style={styles.metaCopy}>mark.emil.sarmiento@gmail.com{'\n'}+63 998 564 0423{'\n'}Calumpit, Bulacan, PH</Text>
            </View>
          </AnimatedPanel>
        </View>

        <AnimatedPanel delay={220} style={styles.bioCard}>
          <View style={[styles.bioInner, isDesktop ? styles.bioInnerDesktop : null]}>
            <View style={styles.bioCopy}>
              <Text style={[styles.bioTitle, isMobile ? styles.bioTitleMobile : null]}>
                Full stack developer building web, mobile, and backend products with a practical engineering mindset.
              </Text>
              <Text style={portfolioText.body}>
                As a dedicated professional, I'm committed to enhancing team effectiveness through
                strategic focus and quality performance. My approach is driven by empathy and a
                genuine desire to empower others.
              </Text>
              <Text style={portfolioText.body}>
                I believe in setting ambitious goals, pushing boundaries, and delivering
                excellence in both professional and personal pursuits.
              </Text>
              <View style={[styles.capabilityRow, isMobile ? styles.capabilityRowMobile : null]}>
                <View style={styles.capabilityBlock}>
                  <Text style={styles.capabilityLabel}>FRONTEND</Text>
                  <Text style={styles.capabilityValue}>React.js / HTML / CSS / JavaScript</Text>
                </View>
                <View style={styles.capabilityBlock}>
                  <Text style={styles.capabilityLabel}>MOBILE</Text>
                  <Text style={styles.capabilityValue}>React Native and Flutter</Text>
                </View>
                <View style={styles.capabilityBlock}>
                  <Text style={styles.capabilityLabel}>BACKEND</Text>
                  <Text style={styles.capabilityValue}>Java Spring Boot</Text>
                </View>
              </View>
            </View>
          </View>
        </AnimatedPanel>
      </PortfolioSection>

      <PortfolioSection id="projects">
        <View style={[styles.sectionHeaderRow, isDesktop ? styles.sectionHeaderRowDesktop : null]}>
          <View style={styles.headerMain}>
            <SectionTitle eyebrow="Work" title="Projects" />
            <Text style={[portfolioText.body, styles.headerDescription]}>
              Selected projects I've designed and built — spanning web apps, crypto tools, and production-ready interfaces.
            </Text>
          </View>
          <AnimatedPanel delay={120} style={[styles.filterPanel, isDesktop ? styles.filterPanelDesktop : null]}>
            <Text style={styles.filterLabel}>CATEGORIES</Text>
            <View style={styles.filterRow}>
              <Chip label="WEB" active />
              <Chip label="CRYPTO" />
              <Chip label="TOOLS" />
            </View>
          </AnimatedPanel>
        </View>

        <View style={[styles.projectGrid, isDesktop ? styles.projectGridDesktop : null]}>
          {projects.map((project, index) => (
            <AnimatedPanel
              delay={140 + index * 80}
              key={project.title}
              style={[
                styles.projectCard,
                isDesktop ? styles.projectCardDesktop : null,
                isDesktop && index % 2 === 1 ? styles.projectCardOffset : null,
              ]}>
              <Pressable
                onPress={() => WebBrowser.openBrowserAsync(project.url)}
                style={({ pressed }) => [styles.cardPressable, pressed && styles.cardPressed]}>
                <RemoteImage source={project.image} style={styles.projectImage} />
                <View style={styles.projectBody}>
                  <View style={styles.projectTitleRow}>
                    <View style={styles.projectTitleWrap}>
                      <Text style={styles.projectLabel}>{project.label}</Text>
                      <Text style={styles.projectTitle}>{project.title}</Text>
                    </View>
                    <MaterialIcons name="north-east" size={18} color={portfolioColors.primaryStrong} />
                  </View>
                  <Text style={portfolioText.bodySmall}>{project.description}</Text>
                  <View style={styles.chipRow}>
                    {project.stack.map((tag) => (
                      <Chip key={tag} label={tag} />
                    ))}
                  </View>
                </View>
              </Pressable>
            </AnimatedPanel>
          ))}
        </View>

        <View
          style={[
            styles.annotationRow,
            isDesktop ? styles.annotationRowDesktop : null,
            isMobile ? styles.annotationRowMobile : null,
          ]}>
          <View style={[styles.exposureCard, isDesktop ? styles.exposureCardDesktop : null]}>
            <Text style={styles.annotationLabel}>TECH_STACK_EXPOSURE</Text>
            {[
              ['REACT_JS', 'EXPERT'],
              ['REACT_NATIVE', 'EXPERT'],
              ['FLUTTER', 'ADVANCED'],
              ['JAVA_SPRING_BOOT', 'WORKING_EXP'],
            ].map(([label, value]) => (
              <View key={label} style={styles.exposureRow}>
                <Text style={styles.exposureKey}>{label}</Text>
                <Text style={styles.exposureValue}>{value}</Text>
              </View>
            ))}
          </View>

          <AnimatedPanel delay={420} style={[styles.quoteCard, isDesktop ? styles.quoteCardDesktop : null]}>
            <MaterialIcons name="terminal" size={20} color={portfolioColors.primary} />
            <Text style={styles.quoteText}>
              “I'm committed to enhancing team effectiveness through strategic focus and quality performance, with empathy and a genuine desire to empower others.”
            </Text>
            <Text style={styles.quoteMeta}>MARK EMIL SARMIENTO</Text>
          </AnimatedPanel>
        </View>
      </PortfolioSection>

      <PortfolioSection id="experience">
        <SectionTitle eyebrow="Professional Dossier" title="Experience" />
        <View style={[styles.layoutRow, isDesktop ? styles.layoutRowDesktop : null]}>
          <AnimatedPanel delay={120} style={[styles.sidePanel, isDesktop ? styles.sidePanelDesktop : null]}>
            <Text style={styles.sideLabel}>CURRENT STATUS</Text>
            <Text style={styles.sideValue}>AVAILABLE FOR SOFTWARE ENGINEERING ROLES</Text>
            <Text style={[styles.sideLabel, styles.sideLabelGap]}>CORE COMPETENCIES</Text>
            <Text style={portfolioText.bodySmall}>
              Full stack development across React.js, React Native, Flutter, Java Spring Boot, App Store releases, and agile team delivery.
            </Text>
          </AnimatedPanel>

          <View style={[styles.timelineWrap, isDesktop ? styles.timelineWrapDesktop : null]}>
            <View style={styles.timelineRail} />
            {timeline.map((item, index) => (
              <AnimatedReveal delay={180 + index * 90} key={item.company} style={styles.timelineItem}>
                <View
                  style={[
                    styles.timelineNode,
                    index === 0 ? styles.timelineNodeActive : null,
                  ]}
                />
                <Panel style={styles.timelineCard}>
                  <View style={styles.timelineHeader}>
                    <View style={styles.timelineCopy}>
                      <Text style={styles.timelineYears}>{item.years}</Text>
                      <Text style={styles.timelineRole}>{item.role}</Text>
                      <Text style={styles.timelineCompany}>{item.company}</Text>
                    </View>
                    <View style={styles.timelineChips}>
                      {item.chips.map((chip) => (
                        <Chip key={chip} label={chip} />
                      ))}
                    </View>
                  </View>

                  <View style={styles.bulletList}>
                    {item.bullets.map((bullet) => (
                      <View key={bullet} style={styles.bulletRow}>
                        <MaterialIcons name="bolt" size={14} color={portfolioColors.primary} />
                        <Text style={[portfolioText.bodySmall, styles.bulletText]}>{bullet}</Text>
                      </View>
                    ))}
                  </View>
                </Panel>
              </AnimatedReveal>
            ))}
          </View>
        </View>

        <View style={[styles.metricRow, isTablet ? styles.metricRowWide : null]}>
          <AnimatedReveal delay={220} style={styles.metricItem}>
            <Metric label="Years Professional Exp" value="5+" />
          </AnimatedReveal>
          <AnimatedReveal delay={280} style={styles.metricItem}>
            <Metric label="Major Roles" value="4" />
          </AnimatedReveal>
          <AnimatedReveal delay={340} style={styles.metricItem}>
            <Metric label="Platforms Shipped" value="WEB + MOBILE" />
          </AnimatedReveal>
        </View>
      </PortfolioSection>

      <PortfolioSection id="stack">
        <View style={[styles.sectionHeaderRow, isDesktop ? styles.sectionHeaderRowDesktop : null]}>
          <View style={styles.headerMain}>
            <SectionTitle eyebrow="Technical Skills" title="Stack" />
            <Text style={[portfolioText.body, styles.headerDescription]}>
              Full stack skills spanning React.js, React Native, Flutter, Java Spring Boot, Xcode, Git, Redux, and Jest.
            </Text>
          </View>
          <View style={styles.versionBlock}>
            <Text style={styles.versionLabel}>LOCATION</Text>
            <Text style={styles.versionValue}>CALUMPIT, BULACAN, PH</Text>
          </View>
        </View>

        <View style={[styles.topGrid, isDesktop ? styles.topGridDesktop : null]}>
          <AnimatedPanel delay={140} style={[styles.frontendPanel, isDesktop ? styles.frontendPanelDesktop : null]}>
            <Text style={styles.panelTitle}>CORE DEVELOPMENT</Text>
            {frontendSkills.map(([name, level, amount, icon], index) => (
              <AnimatedReveal key={name} delay={220 + index * 90} style={styles.skillItem}>
                <View style={styles.skillHeader}>
                  <View style={styles.skillNameWrap}>
                    <MaterialIcons
                      name={icon as React.ComponentProps<typeof MaterialIcons>['name']}
                      size={18}
                      color={portfolioColors.primary}
                    />
                    <Text style={styles.skillName}>{name}</Text>
                  </View>
                  <Text style={styles.skillLevel}>LVL: {level}</Text>
                </View>
                <AnimatedProgress delay={300 + index * 90} progress={Number(amount)} />
              </AnimatedReveal>
            ))}
            <AnimatedReveal delay={520} style={styles.quoteInset}>
              <Text style={styles.quoteInsetText}>
                “Strategic focus, quality performance, and empathy are central to how I build and collaborate.”
              </Text>
            </AnimatedReveal>
          </AnimatedPanel>

          <AnimatedPanel delay={220} style={[styles.mobilePanel, isDesktop ? styles.mobilePanelDesktop : null]}>
            <Text style={styles.panelTitle}>SPECIALIZATIONS</Text>
            <View style={styles.mobileItem}>
              <View style={styles.mobileIconWrap}>
                <MaterialIcons name="smartphone" size={22} color={portfolioColors.primary} />
              </View>
              <View>
                <Text style={styles.mobileTitle}>Mobile Apps</Text>
                <Text style={styles.mobileSubtitle}>IOS AND ANDROID DELIVERY</Text>
              </View>
            </View>
            <View style={styles.mobileItem}>
              <View style={styles.mobileIconWrap}>
                <MaterialIcons name="dns" size={22} color={portfolioColors.primary} />
              </View>
              <View>
                <Text style={styles.mobileTitle}>Backend Support</Text>
                <Text style={styles.mobileSubtitle}>JAVA SPRING BOOT EXPERIENCE</Text>
              </View>
            </View>
            <View style={styles.chipRow}>
              <Chip label="REACT.JS" />
              <Chip label="FLUTTER" />
              <Chip label="JAVA" />
            </View>
          </AnimatedPanel>
        </View>

        <View style={[styles.toolsRow, isDesktop ? styles.toolsRowDesktop : null]}>
          {toolCards.map(([title, subtitle, value, detail, icon], index) => (
            <AnimatedPanel
              delay={280 + index * 80}
              key={title}
              style={[styles.toolPanel, isDesktop ? styles.toolPanelDesktop : null]}>
              <View style={styles.toolIconWrap}>
                <MaterialIcons
                  name={icon as React.ComponentProps<typeof MaterialIcons>['name']}
                  size={28}
                  color={portfolioColors.primary}
                />
              </View>
              <View style={styles.toolCopy}>
                <Text style={styles.toolTitle}>{title}</Text>
                <Text style={styles.toolSubtitle}>{subtitle}</Text>
              </View>
              <View style={styles.toolMeta}>
                <Text style={styles.toolValue}>{value}</Text>
                <Text style={styles.toolDetail}>{detail}</Text>
              </View>
            </AnimatedPanel>
          ))}
        </View>
      </PortfolioSection>

      <PortfolioSection id="contact">
        <AnimatedPanel delay={160} style={styles.ctaCard}>
          <View style={styles.ctaIcon}>
            <MaterialIcons name="bolt" size={18} color={portfolioColors.primary} />
          </View>
          <Text style={styles.ctaTitle}>Let's connect.</Text>
          <Text style={[portfolioText.body, styles.ctaBody]}>
            mark.emil.sarmiento@gmail.com{'\n'}+63 998 564 0423{'\n'}
            <Text
              style={styles.ctaLink}
              onPress={() => WebBrowser.openBrowserAsync('https://www.linkedin.com/in/mark-emil-sarmiento/')}>
              LinkedIn
            </Text>
          </Text>
          <View
            style={[
              styles.heroActions,
              isTablet ? styles.heroActionsWide : null,
              isMobile ? styles.heroActionsMobile : null,
            ]}>
            <View style={styles.buttonWrap}>
              <PrimaryButton
                label="Download Resume"
                onPress={() => Linking.openURL(resumeUrl)}
              />
            </View>
            <View style={styles.buttonWrap}>
              <SecondaryButton
                label="LinkedIn"
                onPress={() => WebBrowser.openBrowserAsync('https://www.linkedin.com/in/mark-emil-sarmiento/')}
              />
            </View>
          </View>
        </AnimatedPanel>

        <FooterSignature label="MARK EMIL SARMIENTO / SOFTWARE ENGINEER" />
      </PortfolioSection>
    </PortfolioScreen>
  );
}

const styles = StyleSheet.create({
  heroRow: {
    gap: 18,
  },
  heroRowDesktop: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    minHeight: 0,
  },
  heroMain: {
    flex: 1,
  },
  heroActions: {
    gap: 12,
    marginBottom: 2,
  },
  heroActionsWide: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  heroActionsMobile: {
    width: '100%',
  },
  buttonWrap: {
    minWidth: 0,
  },
  metaCard: {
    gap: 16,
  },
  metaCardDesktop: {
    width: 280,
    marginTop: 20,
    backgroundColor: 'transparent',
    borderWidth: 0,
    paddingHorizontal: 0,
    paddingVertical: 0,
  },
  metaLabel: {
    color: portfolioColors.primary,
    fontSize: 10,
    letterSpacing: 1.6,
    textTransform: 'uppercase',
    marginBottom: 6,
  },
  metaCopy: {
    color: portfolioColors.textDim,
    fontSize: 12,
    lineHeight: 18,
  },
  bioCard: {
    position: 'relative',
    overflow: 'hidden',
  },
  bioInner: {
    gap: 18,
  },
  bioInnerDesktop: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bioCopy: {
    flex: 1,
    gap: 14,
    minWidth: 0,
  },
  bioTitle: {
    color: portfolioColors.text,
    fontSize: 32,
    lineHeight: 34,
    fontWeight: '900',
    marginTop: 8,
  },
  bioTitleMobile: {
    fontSize: 24,
    lineHeight: 28,
  },
  capabilityRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 18,
    marginTop: 4,
  },
  capabilityRowMobile: {
    flexDirection: 'column',
    gap: 12,
  },
  capabilityBlock: {
    minWidth: 140,
    gap: 4,
  },
  capabilityLabel: {
    color: portfolioColors.primary,
    fontSize: 10,
    letterSpacing: 1.6,
    textTransform: 'uppercase',
  },
  capabilityValue: {
    color: portfolioColors.text,
    fontSize: 14,
    fontWeight: '600',
  },
  sectionHeaderRow: {
    gap: 16,
  },
  sectionHeaderRowDesktop: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  headerMain: {
    flex: 1,
    gap: 12,
  },
  headerDescription: {
    maxWidth: 660,
  },
  filterPanel: {
    gap: 12,
    minWidth: 0,
  },
  filterPanelDesktop: {
    width: 280,
    backgroundColor: 'transparent',
    borderWidth: 0,
    paddingBottom: 10,
  },
  filterLabel: {
    color: portfolioColors.textDim,
    fontSize: 10,
    letterSpacing: 1.8,
    fontWeight: '700',
  },
  filterRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  projectGrid: {
    gap: 16,
  },
  projectGridDesktop: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    columnGap: 24,
    rowGap: 28,
  },
  projectCard: {
    padding: 0,
    overflow: 'hidden',
  },
  cardPressable: {
    flex: 1,
  },
  cardPressed: {
    opacity: 0.85,
  },
  projectCardDesktop: {
    width: '48.9%',
  },
  projectCardOffset: {
    marginTop: 60,
  },
  projectImage: {
    width: '100%',
    height: 200,
    backgroundColor: portfolioColors.backgroundAlt,
  },
  projectBody: {
    padding: 18,
    gap: 14,
  },
  projectTitleRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    gap: 12,
  },
  projectTitleWrap: {
    flex: 1,
    gap: 4,
  },
  projectLabel: {
    color: portfolioColors.primary,
    fontSize: 10,
    letterSpacing: 1.6,
    fontWeight: '700',
  },
  projectTitle: {
    color: portfolioColors.text,
    fontSize: 24,
    lineHeight: 26,
    fontWeight: '900',
  },
  chipRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  annotationRow: {
    gap: 16,
    marginTop: 12,
  },
  annotationRowDesktop: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  annotationRowMobile: {
    marginTop: 0,
  },
  exposureCard: {
    paddingTop: 16,
    gap: 16,
  },
  exposureCardDesktop: {
    flex: 0.48,
  },
  annotationLabel: {
    color: portfolioColors.text,
    fontSize: 11,
    letterSpacing: 2,
    fontWeight: '800',
  },
  exposureRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(60, 73, 78, 0.18)',
  },
  exposureKey: {
    color: portfolioColors.textDim,
    fontSize: 11,
    letterSpacing: 1.2,
  },
  exposureValue: {
    color: portfolioColors.primary,
    fontSize: 11,
    fontWeight: '800',
  },
  quoteCard: {
    gap: 16,
  },
  quoteCardDesktop: {
    flex: 1,
  },
  quoteText: {
    color: portfolioColors.text,
    fontSize: 16,
    lineHeight: 26,
    fontStyle: 'italic',
  },
  quoteMeta: {
    color: portfolioColors.textDim,
    fontSize: 11,
    letterSpacing: 1.5,
    textTransform: 'uppercase',
  },
  layoutRow: {
    gap: 16,
  },
  layoutRowDesktop: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  sidePanel: {
    gap: 8,
  },
  sidePanelDesktop: {
    width: 240,
  },
  sideLabel: {
    color: portfolioColors.textDim,
    fontSize: 10,
    letterSpacing: 1.6,
    textTransform: 'uppercase',
  },
  sideValue: {
    color: portfolioColors.primary,
    fontSize: 14,
    fontWeight: '800',
    letterSpacing: 0.3,
  },
  sideLabelGap: {
    marginTop: 10,
  },
  timelineWrap: {
    position: 'relative',
    gap: 18,
    paddingLeft: 22,
    flex: 1,
  },
  timelineWrapDesktop: {
    minWidth: 0,
  },
  timelineRail: {
    position: 'absolute',
    left: 7,
    top: 0,
    bottom: 0,
    width: 1,
    backgroundColor: 'rgba(60, 73, 78, 0.2)',
  },
  timelineItem: {
    position: 'relative',
  },
  timelineNode: {
    position: 'absolute',
    left: -22,
    top: 22,
    width: 14,
    height: 14,
    borderRadius: 999,
    backgroundColor: portfolioColors.surfaceHighest,
  },
  timelineNodeActive: {
    backgroundColor: portfolioColors.primary,
    shadowColor: portfolioColors.primaryStrong,
    shadowOpacity: 0.35,
    shadowRadius: 14,
    shadowOffset: { width: 0, height: 0 },
  },
  timelineCard: {
    gap: 14,
  },
  timelineHeader: {
    gap: 12,
  },
  timelineCopy: {
    gap: 4,
  },
  timelineYears: {
    color: portfolioColors.textDim,
    fontSize: 11,
    letterSpacing: 1.4,
    textTransform: 'uppercase',
  },
  timelineRole: {
    color: portfolioColors.text,
    fontSize: 28,
    lineHeight: 30,
    fontWeight: '900',
  },
  timelineCompany: {
    color: portfolioColors.primary,
    fontSize: 13,
    fontWeight: '800',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  timelineChips: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  bulletList: {
    gap: 12,
  },
  bulletRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 10,
  },
  bulletText: {
    flex: 1,
  },
  metricRow: {
    gap: 12,
    marginTop: 4,
  },
  metricRowWide: {
    flexDirection: 'row',
  },
  metricItem: {
    flex: 1,
  },
  versionBlock: {
    gap: 8,
    alignItems: 'flex-start',
    paddingTop: 10,
  },
  versionLabel: {
    color: portfolioColors.textDim,
    fontSize: 11,
    letterSpacing: 1.4,
  },
  versionValue: {
    color: portfolioColors.primary,
    fontSize: 16,
    fontWeight: '800',
    letterSpacing: 0.5,
  },
  topGrid: {
    gap: 16,
  },
  topGridDesktop: {
    flexDirection: 'row',
    alignItems: 'stretch',
  },
  frontendPanel: {
    gap: 18,
  },
  frontendPanelDesktop: {
    flex: 1.8,
  },
  mobilePanel: {
    gap: 16,
  },
  mobilePanelDesktop: {
    flex: 0.9,
  },
  panelTitle: {
    color: portfolioColors.primary,
    fontSize: 11,
    letterSpacing: 2.2,
    textTransform: 'uppercase',
  },
  skillItem: {
    gap: 10,
  },
  skillHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
    flexWrap: 'wrap',
  },
  skillNameWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  skillName: {
    color: portfolioColors.text,
    fontSize: 24,
    fontWeight: '800',
  },
  skillLevel: {
    color: portfolioColors.textDim,
    fontSize: 10,
    letterSpacing: 1.2,
  },
  quoteInset: {
    marginTop: 4,
    backgroundColor: portfolioColors.backgroundAlt,
    borderRadius: 18,
    padding: 16,
  },
  quoteInsetText: {
    color: portfolioColors.textMuted,
    fontSize: 15,
    lineHeight: 24,
    fontStyle: 'italic',
  },
  mobileItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
  },
  mobileIconWrap: {
    width: 52,
    height: 52,
    borderRadius: 16,
    backgroundColor: portfolioColors.surfaceHighest,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mobileTitle: {
    color: portfolioColors.text,
    fontSize: 22,
    fontWeight: '800',
  },
  mobileSubtitle: {
    color: portfolioColors.textDim,
    fontSize: 11,
    letterSpacing: 1.1,
  },
  toolsRow: {
    gap: 16,
  },
  toolsRowDesktop: {
    flexDirection: 'row',
  },
  toolPanel: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
    flexWrap: 'wrap',
  },
  toolPanelDesktop: {
    flex: 1,
  },
  toolIconWrap: {
    width: 58,
    height: 58,
    borderRadius: 999,
    backgroundColor: portfolioColors.backgroundAlt,
    alignItems: 'center',
    justifyContent: 'center',
  },
  toolCopy: {
    flex: 1,
    gap: 4,
  },
  toolTitle: {
    color: portfolioColors.text,
    fontSize: 24,
    fontWeight: '800',
  },
  toolSubtitle: {
    color: portfolioColors.textDim,
    fontSize: 11,
    letterSpacing: 1.2,
  },
  toolMeta: {
    alignItems: 'flex-end',
    gap: 2,
    marginLeft: 'auto',
  },
  toolValue: {
    color: portfolioColors.primary,
    fontSize: 12,
    fontWeight: '800',
  },
  toolDetail: {
    color: portfolioColors.textDim,
    fontSize: 9,
    letterSpacing: 1,
  },
  ctaCard: {
    alignItems: 'center',
    paddingTop: 30,
    paddingBottom: 30,
    gap: 14,
    backgroundColor: portfolioColors.backgroundAlt,
  },
  ctaIcon: {
    width: 42,
    height: 42,
    borderRadius: 999,
    backgroundColor: portfolioColors.surface,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ctaTitle: {
    color: portfolioColors.text,
    fontSize: 28,
    lineHeight: 32,
    textAlign: 'center',
    fontWeight: '900',
  },
  ctaBody: {
    textAlign: 'center',
    maxWidth: 680,
  },
  ctaLink: {
    color: portfolioColors.primary,
    fontWeight: '700',
    textDecorationLine: 'underline',
  },
});
