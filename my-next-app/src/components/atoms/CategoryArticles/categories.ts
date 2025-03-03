interface Category {
    label: string;
    url: string;
    imageUrl: string;
    title: string;
    content: string;
    amazonLink: string;
}

export const categories: Category[] = [
    {
        label: 'Speakers',
        url: '/speakers',
        imageUrl: '/images/speaker_image.jpg', 
        title: 'Amazon Echo (5th Gen) - The Best Smart Speaker of 2024',
        content:
            'The Amazon Echo (5th Gen) leads the smart speaker market in 2024 with its exceptional sound quality, seamless integration with Alexa, and enhanced smart home controls. Experience immersive audio, multi-room capabilities, and control your smart home with simple voice commands. Whether streaming music or managing your lights, this speaker is a must-have for tech-savvy homes.',
        amazonLink: 'https://www.amazon.com/amazon-echo-5th-gen', 
    },
    {
        label: 'Lighting',
        url: '/lighting',
        imageUrl: '/images/lighting.jpg', // Replace with actual image path
        title: 'Philips Hue Smart Bulbs - Top Smart Lighting Solution for 2024',
        content:
            'Philips Hue Smart Bulbs continue to be a best-seller in 2024, offering unmatched energy efficiency, vibrant colors, and easy voice control through Alexa, Google Assistant, and Apple HomeKit. Customize your home’s ambiance with millions of colors and schedules that adapt to your lifestyle. Transform your living space effortlessly with these smart bulbs.',
        amazonLink: 'https://www.amazon.com/philips-hue-smart-bulbs', // Replace with actual link
    },
    {
        label: 'Thermostats',
        url: '/thermostats',
        imageUrl: '/images/thermostat.jpg', // Replace with actual image path
        title: 'Google Nest Thermostat (2024) - Smart Temperature Control',
        content:
            'The Google Nest Thermostat stands out in 2024 for its energy-saving capabilities, sleek design, and compatibility with most HVAC systems. It learns your habits, optimizes temperature settings to reduce energy costs, and can be controlled remotely via smartphone. Perfect for creating a comfortable, eco-friendly home.',
        amazonLink: 'https://www.amazon.com/google-nest-thermostat', // Replace with actual link
    },
    {
        label: 'Cameras',
        url: '/cameras',
        imageUrl: '/images/camera.jpg', // Replace with actual image path
        title: 'Ring Indoor Cam (2024) - Best Smart Camera for Home Security',
        content:
            'Keep your home secure with the Ring Indoor Cam, the top-selling smart camera of 2024. Offering high-definition video, two-way talk, motion detection, and integration with Ring’s full security system, this camera gives you peace of mind with real-time alerts. Monitor your home anytime, anywhere.',
        amazonLink: 'https://www.amazon.com/ring-indoor-cam', // Replace with actual link
    },
    {
        label: 'Locks & Security',
        url: '/locks-security',
        imageUrl: '/images/locks.jpg', // Replace with actual image path
        title: 'August Wi-Fi Smart Lock - Leading Smart Lock of 2024',
        content:
            'The August Wi-Fi Smart Lock offers unparalleled convenience and security in 2024. With features like remote locking/unlocking, auto-lock settings, and compatibility with Alexa, Google Assistant, and Apple HomeKit, it’s a favorite among homeowners. Gain full control over who enters your home, even when you’re away.',
        amazonLink: 'https://www.amazon.com/august-wifi-smart-lock', // Replace with actual link
    },
];
