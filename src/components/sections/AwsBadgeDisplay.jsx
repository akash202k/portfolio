import React from 'react';

const AwsBadgeDisplay = () => {
    const awsBadges = [
        {
            id: 1,
            href: './tech/devops/aws-saa.png',
        },
        {
            id: 2,
            href: './tech/devops/aws-da.png',
        },
        {
            id: 3,
            href: './tech/devops/aws-p.png',
        },
    ];

    return (
        <div className="flex space-x-8  pt-14 px-16 ">
            {awsBadges.map(badge => (
                <a
                    key={badge.id}
                    href={badge.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0 "
                >
                    <img
                        src={badge.href}
                        alt="AWS Badge"
                        className="w-32 h-32 object-contain"
                    />
                </a>
            ))}
        </div>
    );
};

export default AwsBadgeDisplay;
