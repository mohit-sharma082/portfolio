import { useState } from 'react';
import { Menu, AlignLeft } from 'lucide-react';
import { Button, buttonVariants } from './ui/button';
import { useMediaQuery } from '@/util/useMediaQuery';
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '@/components/ui/sheet';
import { ModeToggle } from './ModeToggle';

export default function Nav() {
	const [toggled, setToggled] = useState(false);
	const match = useMediaQuery('(min-width:1080px)');

	return (
		<nav className="relative flex justify-between items-center lg:px-20 lg:py-10">
			<div className="p-4">M.S.</div>

			<ModeToggle />

			<Sheet>
				<SheetTrigger>{Hamburger()}</SheetTrigger>
				<SheetContent>
					<SheetHeader>
						<SheetDescription>{Links()}</SheetDescription>
					</SheetHeader>
				</SheetContent>
			</Sheet>
		</nav>
	);

	function Hamburger() {
		return (
			<div className="m-5 relative group">
				<Menu className="hidden group-hover:block" />
				<AlignLeft className="block group-hover:hidden"/>
			</div>
		);
	}

	function Links() {
		return (
			<ul className="flex flex-col gap-12 bottom-0 left-0 w-full h-screen items-center justify-center">
				<li>
					<Button>Home</Button>
				</li>
				<li>
					<Button>Projects</Button>
				</li>
				<li>
					<Button>About</Button>
				</li>
				<li>
					<Button>Contact</Button>
				</li>
			</ul>
		);
	}
}
