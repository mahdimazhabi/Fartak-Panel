// import { cn } from "@/shared/lib/utils";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
// import { UserIcon } from "@/assets/icons";
// import { ReactNode } from "react";
// interface Props {
//   className?: string;
//   src?: string;
//   fallback?: string | ReactNode;
//   name: string;
//   children?: ReactNode;
//   modalPicClassName?: string;
// }

// const MainAvatar = ({
//   className,
//   src,
//   fallback,
//   name,
//   children,
//   modalPicClassName,
// }: Props) => {
//   return (
//     <Dialog>
//       <DialogTrigger>
//         <Avatar className={cn("w-6 h-6", className)}>
//           {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
//           <AvatarImage src={src} alt={name} title={name} />
//           <AvatarFallback>
//             <UserIcon className="w-full h-full text-gray-500 dark:text-gray-400" />
//           </AvatarFallback>
//         </Avatar>
//       </DialogTrigger>
//       <DialogContent className="w-96">
//         <div className="relative w-full h-full">
//           {src ? (
//             <img
//               src={src}
//               alt={name}
//               className={cn("h-full w-full object-contain", modalPicClassName)}
//             />
//           ) : (
//             <div className="flex items-center justify-center">
//               {!fallback ? (
//                 <UserIcon className="w-full h-full text-gray-500 dark:text-gray-400" />
//               ) : (
//                 <>
//                   {fallback && typeof fallback !== "string" ? (
//                     fallback
//                   ) : (
//                     <UserIcon className="w-full h-full text-gray-500 dark:text-gray-400" />
//                   )}
//                 </>
//               )}
//             </div>
//           )}
//           {children}
//         </div>
//       </DialogContent>
//     </Dialog>
//   );
// };

// export default MainAvatar;
