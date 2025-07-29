import Image from 'next/image';
import { FC } from 'react';
import List from './List';
import { Code, History } from 'lucide-react';
import Link from 'next/link';

interface CardProps {
    title: string;
    snippetCount: number;
    exp: string;
    src: string;
    progress: number;
    href?: string;
}

const Card: FC<CardProps> = ({
    title,
    snippetCount,
    exp,
    src,
    href,
    progress,
}) => {
    // If href is not present or is empty, default to home page
    const linkDestination = href && href.trim() !== '' ? href : '/';

    // Determine if it's an external link
    const isExternalLink = linkDestination !== '/' && (
        linkDestination.startsWith('http://') ||
        linkDestination.startsWith('https://') ||
        linkDestination.startsWith('//')
    );

    const target = isExternalLink ? "_blank" : "_self";

    return (
        <div className="flex flex-col gap-3">
            <Link target={target} href={linkDestination}>
                <div className="relative aspect-video rounded-lg overflow-hidden">
                    <Image
                        src={src}
                        alt={title}
                        fill
                        className="object-cover"
                    />
                    <div className="progress-bar">
                        <div
                            className="h-full bg-btnHighlight"
                            style={{
                                width: `${progress}%`,
                            }}
                        />
                    </div>
                </div>
            </Link>
            <div className="grid gap-2 px-2">
                <div className="text-highlight font-bold">{title}</div>
                <div className="flex gap-2 md:gap-10">
                    <List
                        variant="info"
                        target={target}
                        link={linkDestination}
                        sizes="xs"
                    >
                        <Code size={16} />
                        {snippetCount.toLocaleString()}
                    </List>
                    <List
                        variant="info"
                        target={target}
                        link={linkDestination}
                        sizes="xs"
                    >
                        <History size={16} />
                        {exp}
                    </List>
                </div>
            </div>
        </div>
    );
};

export default Card;