import { FC } from 'react';
import ProfilePic from './cover/ProfilePic';
import ProfileName from './cover/ProfileName';
import Button from './ui/Button';
import { Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';

interface CoverProps { }

const Cover: FC<CoverProps> = () => {
    return (
        <div className="flex rounded-lg w-full bg-[url('/images/cover.jpeg')] bg-no-repeat bg-cover">
            <div className="flex justify-center md:rounded-ld overflow-hidden md:px-10 py-5 bg-blur backdrop-filter backdrop-blur-md w-full gap-2 md:gap-10">
                <ProfilePic />
                <div className="flex md:flex-1 flex-col justify-center gap-4">
                    <div className="flex justify-between items-center gap-5">
                        <ProfileName />
                        <Link
                            className="hidden md:block"
                            target="_blank"
                            href="https://www.linkedin.com/in/akash202k/"
                        >
                            <Button
                                variant="primary"
                                sizes={'small'}
                                className="relative overflow-hidden group"
                            >
                                <div className="absolute inset-0 bg-blue-900 transition-all duration-300 transform scale-x-0 group-hover:scale-x-100 group-hover:bg-blue-700 origin-left"></div>
                                <div className="relative flex items-center gap-2 text-white group-hover:text-gray-200">
                                    <Linkedin />
                                    <span className="hidden md:block ml-0">
                                        Connect
                                    </span>
                                </div>
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cover;
