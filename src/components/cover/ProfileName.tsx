import Link from 'next/link';
import { FC } from 'react';
import Button from '../ui/Button';
import { Instagram, Twitter } from 'lucide-react';

interface ProfileNameProps { }

const ProfileName: FC<ProfileNameProps> = ({ }) => {
    return (
        <div className="text-3xl flex flex-col font-bold text-highlight">
            Akash Pawar
            <div className="text-sm font-thin flex justify-between items-center">
                +91 - 9346706296
                <Link
                    className="block md:hidden"
                    href="https://x.com/akash202k_"
                    target='_blank'
                >
                    <Button variant="primary" sizes={'iconOnly'}>
                        <Twitter />
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default ProfileName;
