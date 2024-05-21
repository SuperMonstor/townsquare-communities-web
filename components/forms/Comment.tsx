"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { CommentValidation } from "@/lib/validations/thread"
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
import { Button } from "../ui/button"
import { addCommentToThread, createThread } from "@/lib/actions/thread.actions"
import { Input } from "../ui/input"
import Image from "next/image"

interface Props {
	threadId: string
	currentUserImage: string
	currentUserId: string
}
export default function Comment({
	threadId,
	currentUserImage,
	currentUserId,
}: Props) {
	const router = useRouter()
	const pathname = usePathname()

	const form = useForm<z.infer<typeof CommentValidation>>({
		resolver: zodResolver(CommentValidation),
		defaultValues: {
			thread: "",
		},
	})

	async function onSubmit(values: z.infer<typeof CommentValidation>) {
		await addCommentToThread(
			threadId,
			values.thread,
			JSON.parse(currentUserId),
			pathname
		)
		form.reset()
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="comment-form">
				<FormField
					control={form.control}
					name="thread"
					render={({ field }) => (
						<FormItem className="flex w-full items-center gap-3">
							<FormLabel>
								<Image
									src={currentUserImage}
									alt="Profile Image"
									width={48}
									height={48}
									className="rounded-full object-cover"
								/>
							</FormLabel>
							<FormControl className="border-non bg-transparent">
								<Input
									type="text"
									placeholder="Comment..."
									className="text-light-1 outline-none no-focus"
									{...field}
								/>
							</FormControl>
						</FormItem>
					)}
				/>

				<Button type="submit" className="comment-form_btn">
					Reply
				</Button>
			</form>
		</Form>
	)
}
