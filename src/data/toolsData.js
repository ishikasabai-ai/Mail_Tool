import bigmailerLogo from '../assets/bigmailer.png';
import mailerliteLogo from '../assets/mailerlite.png';
import aweberLogo from '../assets/aweber.png';
import moosendLogo from '../assets/moosend.png';

export const toolsData = [
    {
        id: "bigmailer",
        name: "BigMailer",
        logo: bigmailerLogo,
        rating: 4.8,
        reviews: 250,
        description: "High-performance email delivery platform built for teams that take inbox placement and control seriously.",
        pricing: "Agency 200k+ Contacts $10 per 5000 contacts/mo.",
        features: [
            "High-volume email sending (Amazon SES)",
            "Dedicated & Shared IPs",
            "Advanced Domain Management",
            "Campaigns & Transactional Emails",
            "Real-time Analytics",
            "API & SMTP Relay",
            "Multi-brand Management",
            "Team Roles & Permissions",
            "Webhooks",
            "GDPR Compliant"
        ],
        pros: [
            "Exceptional deliverability with advanced IP/domain management",
            "Built on Amazon SES for reliability & scale",
            "Unlimited brands & domains under one account",
            "Clean, fast UI for experienced teams",
            "Detailed analytics (opens, clicks, bounces)",
            "Competitive pricing vs enterprise ESPs"
        ],
        cons: [
            "Not beginner-focused (best for experienced teams)",
            "No built-in list marketplace or lead gen tools",
            "Requires domain/DNS configuration",
            "Minimal template library"
        ],
        bestFor: "Agencies & High Volume",
        affiliateLink: "https://www.bigmailer.io/?via=ishika-rawat",
        reviewContent: [
            {
                title: "Overview",
                content: "BigMailer is a high-performance email delivery platform built for teams that take inbox placement, scalability, and control seriously. Designed for SaaS companies, e-commerce brands, agencies, and high-volume senders, BigMailer combines enterprise-grade infrastructure with a refreshingly simple interface—making it easy to send millions of emails without enterprise bloat or pricing.\n\nWhether you’re managing transactional emails, large-scale campaigns, or multiple brands under one roof, BigMailer delivers the reliability, flexibility, and deliverability tools needed to operate email at scale."
            },
            {
                title: "Why BigMailer Excels at Deliverability",
                content: "BigMailer’s strongest advantage is its focus on email infrastructure rather than surface-level marketing features. By leveraging Amazon SES and layering intelligent controls on top, the platform gives senders full visibility and authority over how emails are sent, authenticated, and delivered.\n\nThis makes BigMailer especially effective for businesses that have struggled with inbox placement on traditional ESPs or outgrown beginner tools."
            },
            {
                title: "Built for Scale Without Enterprise Complexity",
                content: "Unlike legacy enterprise platforms that lock users into rigid contracts and bloated dashboards, BigMailer keeps things streamlined. You can manage multiple brands, domains, and sender identities from a single account—perfect for agencies, SaaS portfolios, or growing e-commerce operations.\n\nCampaign setup is fast, performance is consistent, and the system remains stable even at very high volumes."
            },
            {
                title: "Powerful Analytics Without the Noise",
                content: "BigMailer’s reporting focuses on what actually matters:\n• Delivery success and bounce rates\n• Opens and clicks\n• Spam complaints and feedback loops\n• Domain- and IP-level performance\n\nThis clarity allows teams to quickly diagnose deliverability issues and optimize sending behavior without digging through unnecessary metrics."
            },
            {
                title: "Developer-Friendly and Automation-Ready",
                content: "For technical teams, BigMailer shines with its API-first approach. SMTP and REST API options make it easy to integrate into existing systems, trigger transactional emails, and automate workflows. Webhooks provide real-time feedback for events like bounces, opens, and complaints—essential for maintaining sender reputation at scale."
            },
            {
                title: "Security and Compliance",
                content: "BigMailer follows modern best practices for email security and compliance. With support for SPF, DKIM, DMARC, and GDPR-aligned data handling, it’s well-suited for organizations sending sensitive or regulated communications."
            },
            {
                title: "Who Should Use BigMailer?",
                content: "BigMailer is ideal for:\n• SaaS companies sending high-volume transactional emails\n• E-commerce brands running large promotional campaigns\n• Marketing agencies managing multiple clients and domains\n• Startups that have outgrown entry-level ESPs\n• Engineering teams that want full email control without building infrastructure"
            },
            {
                title: "The Bottom Line",
                content: "BigMailer is not trying to be an all-in-one marketing suite—and that’s exactly why it works so well. By focusing on deliverability, performance, and scalability, it gives serious senders the tools they actually need to succeed in the inbox.\n\nFor businesses that understand email as infrastructure—not just marketing—BigMailer delivers outstanding value without enterprise lock-in."
            },
            {
                title: "Our Verdict",
                content: "After extensive evaluation, BigMailer stands out as a reliable, no-nonsense email delivery platform for high-volume senders. Its combination of Amazon SES reliability, advanced deliverability controls, and clean user experience makes it a strong alternative to traditional enterprise ESPs.\n\nWhile it may not suit beginners looking for flashy templates, for teams that care about inbox placement, control, and cost efficiency, BigMailer is an excellent long-term solution."
            }
        ]
    },
    {
        id: "mailchimp",
        name: "Mailchimp",
        logo: "https://tse3.mm.bing.net/th/id/OIP.dTNA95jKWk64stcq2ddiDAHaEK?cb=defcachec2&w=474&h=379&c=7&p=0",
        rating: 4.5,
        reviews: 12500,
        description: "The all-in-one marketing platform for small businesses.",
        pricing: "Free plan available. Paid starts at $13/mo",
        features: ["Email Automation", "Landing Pages", "A/B Testing", "Analytics"],
        pros: ["Easy to use", "Great free plan", "Huge integration library"],
        cons: ["Price gets high quickly", "Limited automation on lower tiers"],
        bestFor: "Beginners & Small Business",
        affiliateLink: "https://mailchimp.com"
    },
    // ... (keep other tools same) ...
    {
        id: "mailerlite",
        name: "MailerLite",
        logo: mailerliteLogo,
        rating: 4.5,
        reviews: 4800,
        description: "Simple, effective, and affordable email marketing.",
        pricing: "Free plan available. Paid starts at $10/mo",
        features: ["Drag-and-drop Editor", "Automation", "Websites", "Popups"],
        pros: ["Clean interface", "Very affordable", "Great free plan"],
        cons: ["Approval process can be strict", "Validation required"],
        bestFor: "Small Business & Starters",
        affiliateLink: "https://www.mailerlite.com"
    },
    {
        id: "convertkit",
        name: "ConvertKit",
        logo: "https://tse4.mm.bing.net/th/id/OIP.ikIqr_F6I3r1jn2C6mIpOAHaHa?w=474&h=379&c=7&p=0",
        rating: 4.6,
        reviews: 3500,
        description: "The go-to email platform for creators, bloggers, and authors.",
        pricing: "Free plan for 1k subs. Paid starts at $29/mo",
        features: ["Visual Automation", "Landing Pages", "Commerce Features", "Creator Network"],
        pros: ["Excellent delivery rates", "Simple text-based emails focus on content", "Great for selling digital products"],
        cons: ["Limited design options for emails", "Reporting is basic on lower plans"],
        bestFor: "Creators & Bloggers",
        affiliateLink: "https://convertkit.com"
    },
    {
        id: "aweber",
        name: "AWeber",
        logo: aweberLogo,
        rating: 4.2,
        reviews: 3100,
        description: "Reliable email marketing for small businesses and solopreneurs.",
        pricing: "Free plan available. Paid starts at $16.15/mo",
        features: ["Autoresponders", "Landing Pages", "Canva Integration", "24/7 Support"],
        pros: ["Great customer support", "Canva integration", "Reliable delivery"],
        cons: ["Dated interface", "Automation is basic"],
        bestFor: "Small Business & Solopreneurs",
        affiliateLink: "https://www.aweber.com"
    },
    {
        id: "moosend",
        name: "Moosend",
        logo: moosendLogo,
        rating: 4.6,
        reviews: 2800,
        description: "All-in-one marketing platform with great value.",
        pricing: "Starts at $9/mo",
        features: ["Visual Automation", "Reporting & Analytics", "AI Subject Lines", "Landing Pages"],
        pros: ["Very affordable", "Advanced automation", "Real-time analytics"],
        cons: ["Landing page builder is slow", "No SMS marketing"],
        bestFor: "Growth & Affordability",
        affiliateLink: "https://moosend.com"
    },
    {
        id: "getresponse",
        name: "GetResponse",
        logo: "https://tse2.mm.bing.net/th/id/OIP.7Gap2K45tkc3DoyxoGttRQAAAA?w=400&h=320&c=7&p=0",
        rating: 4.4,
        reviews: 8900,
        description: "An all-in-one marketing platform with email campaigns, automation, and webinars.",
        pricing: "Free plan available. Paid starts at $19/mo",
        features: ["Email Automation", "Webinars", "Landing Pages", "Sales Funnels"],
        pros: ["Built-in webinars", "Strong automation", "Good templates"],
        cons: ["UI can feel crowded", "Automation locked on higher plans"],
        bestFor: "Marketers & online educators",
        affiliateLink: "https://www.getresponse.com"
    }
];
