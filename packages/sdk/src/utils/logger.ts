import pino from "pino";

const pretty = process.env.NODE_ENV === "development";

export const logger = pino({
	level: "info",
	...(pretty
		? {
				transport: {
					target: "pino-pretty",
					options: {
						colorize: true,
						translateTime: "SYS:standard",
						ignore: "pid,hostname",
					},
				},
			}
		: {}),
});
