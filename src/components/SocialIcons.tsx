import { Bot, Users, Twitter } from 'lucide-react';

const SocialIcons = () => {
  const socialLinks = [
    {
      name: 'Telegram Bot',
      url: 'https://t.me/AlphaZenthbot',
      icon: Bot,
      color: 'text-blue-500 hover:text-blue-400'
    },
    {
      name: 'Telegram Channel',
      url: 'https://t.me/Alpha_Zenth_update',
      icon: Users,
      color: 'text-blue-500 hover:text-blue-400'
    },
    {
      name: 'Twitter/X',
      url: 'https://x.com/AlphaZenth',
      icon: Twitter,
      color: 'text-gray-300 hover:text-white'
    }
  ];

  return (
    <div className="flex items-center gap-4">
      {socialLinks.map((social, index) => {
        const IconComponent = social.icon;
        return (
          <a
            key={index}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.name}
            className={`${social.color} transition-colors duration-300`}
          >
            <IconComponent className="w-5 h-5" />
          </a>
        );
      })}
    </div>
  );
};

export default SocialIcons;