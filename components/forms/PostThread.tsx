"use client"

import { ThreadValidation } from "@/lib/validations/thread"
import { zodResolver } from "@hookform/resolvers/zod"
import { usePathname, useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form"
import { Textarea } from "../ui/textarea"
import { Button } from "../ui/button"
import { createThread } from "@/lib/actions/thread.actions"

function PostThread({ userId }: { userId: string }) {
	const router = useRouter()
	const pathname = usePathname()

	const form = useForm<z.infer<typeof ThreadValidation>>({
		resolver: zodResolver(ThreadValidation),
		defaultValues: {
			thread: "",
			accountId: userId,
		},
	})

	async function onSubmit(values: z.infer<typeof ThreadValidation>) {
		await createThread({
			text: values.thread,
			author: userId,
			communityId: null,
			path: pathname,
		})

		router.push("/")
	}

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="mt-10 flex flex-col justify-start gap-10"
			>
				<FormField
					control={form.control}
					name="thread"
					render={({ field }) => (
						<FormItem className="flex w-full flex-col gap-3">
							<FormLabel className="text-base-semibold text-light-2">
								Content
							</FormLabel>
							<FormControl className="no-focus border border-dark-4 bg-dark-3 text-light-1">
								<Textarea
									rows={15}
									className="account-form_input no-focus"
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<Button type="submit" className="bg-primary-500">
					Post Thread
				</Button>
			</form>
		</Form>
	)
}

export default PostThread
