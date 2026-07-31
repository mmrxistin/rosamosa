//Bismillahirahmanirahim
//Elhamdulillahi rabbil 'alamin
//Essalatu vesselamu ala seyyidina Muhammedin
//Allah U Ekber, Allah U Ekber, Allah U Ekber, La ilahe illallah
//Subhanallah, Elhamdulillah, Allahu Ekber



import { cn } from "@/lib/utils";
import { Eye, EyeOff } from "lucide-react";
import React, { useState } from "react";
import { Input, InputProps } from "./ui/input";

const PasswordInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
      <div className="relative">
        <Input
          type={showPassword ? "text" : "password"}
          className={cn("!pr-12", className)}
          ref={ref}
          {...props}
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          title={showPassword ? "Şifreyi gizle" : "Şifreyi göster"}
          className="password-toggle-btn absolute right-3 top-1/2 -translate-y-1/2 z-10 flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground hover:text-foreground bg-transparent hover:bg-transparent border-none p-0 focus:outline-none"
        >
          {showPassword ? (
            <EyeOff className="h-5 w-5" />
          ) : (
            <Eye className="h-5 w-5" />
          )}
        </button>
      </div>
    );
  },
);

PasswordInput.displayName = "PasswordInput";

export { PasswordInput };
