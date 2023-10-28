import { useEffect, useState } from 'react';
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
	const match = useMediaQuery('(min-width:1080px)');

	return (
		<nav className="relative flex justify-between items-center py-3  min-w-[90vw] backdrop-blur-lg">
			<div className="p-4">M.S.</div>
			<div className="flex justify-between items-center">
				{match ? (
					Links(
						'flex gap-7 bottom-0 left-0 w-full items-center justify-center pr-20'
					)
				) : (
					<Sheet>
						<SheetTrigger>{Hamburger()}</SheetTrigger>
						<SheetContent>
							<SheetHeader>{Links()}</SheetHeader>
						</SheetContent>
					</Sheet>
				)}
				<ModeToggle />
			</div>
		</nav>
	);

	function Hamburger() {
		return (
			<div className="m-5 relative group">
				<Menu className="hidden group-hover:block" />
				<AlignLeft className="block group-hover:hidden" />
			</div>
		);
	}

	function Links(styles?: string) {
		/** default classes given for sidebar */
		const classes =
			styles ??
			'flex flex-col gap-12 bottom-0 left-0 w-full h-screen items-center justify-center';

		return (
			<ul className={classes}>
				<li>
					<Button variant={'link'}>Home</Button>
				</li>
				<li>
					<Button variant={'link'}>Projects</Button>
				</li>
				<li>
					<Button variant={'link'}>About</Button>
				</li>
				<li>
					<Button variant={'link'}>Contact</Button>
				</li>
			</ul>
		);
	}
}
