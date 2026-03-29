import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/app/components/ui/dialog";
import { motion } from "framer-motion";
import { MapPin, ExternalLink } from "lucide-react";

interface DetailDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  subtitle?: string;
  description: string;
  image?: string;
  icon?: React.ReactNode;
  tags?: string[];
  website?: string;
  extraContent?: React.ReactNode;
  details?: any;
}

export default function DetailDialog({
  open,
  onOpenChange,
  title,
  subtitle,
  description,
  image,
  icon,
  tags,
  website,
  extraContent,
  details,
}: DetailDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-card border-gold/20 max-w-lg max-h-[85vh] overflow-y-auto p-0">
        {/* Image or icon header */}
        {image ? (
          <div className="relative aspect-16/10 overflow-hidden rounded-t-lg">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-card via-transparent to-transparent" />
          </div>
        ) : icon ? (
          <div className="flex items-center justify-center pt-8 pb-2">
            <div className="w-20 h-20 rounded-full bg-muted border-2 border-primary/30 flex items-center justify-center">
              {icon}
            </div>
          </div>
        ) : null}

        <div className="px-6 pb-6 pt-3">
          <DialogHeader className="text-left mb-4">
            <DialogTitle className="font-serif text-2xl text-gradient-gold">
              {title}
            </DialogTitle>
            {subtitle && (
              <DialogDescription className="text-sand text-sm mt-1">
                {subtitle}
              </DialogDescription>
            )}
          </DialogHeader>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            {/* Default description (still works everywhere) */}
            {!details && (
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {description}
              </p>
            )}

            {/* Rich structured content (only if details exists) */}
            {details && (
              <div className="space-y-6 text-sm">
                {/* Intro */}
                {details.intro && (
                  <p className="text-muted-foreground whitespace-pre-line leading-relaxed">
                    {details.intro}
                  </p>
                )}

                {/* Majors */}
                {details.majors && (
                  <div>
                    <h4 className="font-semibold text-primary mb-2">
                      专业设置
                    </h4>
                    {Object.entries(details.majors).map(
                      ([category, items]: [string, any]) => (
                        <div key={category} className="mb-3">
                          <p className="font-medium">{category}</p>
                          <ul className="list-disc ml-5 text-muted-foreground">
                            {(items as string[]).map(
                              (item: string, i: number) => (
                                <li key={i}>{item}</li>
                              ),
                            )}
                          </ul>
                        </div>
                      ),
                    )}
                  </div>
                )}

                {/* Requirements */}
                {details.requirements && (
                  <div>
                    <h4 className="font-semibold text-primary mb-2">
                      申请材料
                    </h4>
                    <ul className="list-disc ml-5 text-muted-foreground">
                      {details.requirements.map((r: string, i: number) => (
                        <li key={i}>{r}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {details.conditions && (
                  <div>
                    <h4 className="font-semibold text-primary mb-2">
                      录取条件
                    </h4>
                    <ul className="list-disc ml-5 text-muted-foreground">
                      {details.conditions.map((c: string, i: number) => (
                        <li key={i}>{c}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Steps */}
                {details.steps && (
                  <div>
                    <h4 className="font-semibold text-primary mb-2">
                      申请流程
                    </h4>
                    <ul className="list-disc ml-5 text-muted-foreground">
                      {details.steps.map((s: string, i: number) => (
                        <li key={i}>{s}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Advantages */}
                {details.advantages && (
                  <div>
                    <h4 className="font-semibold text-primary mb-2">优势</h4>
                    <ul className="list-disc ml-5 text-muted-foreground">
                      {details.advantages.map((a: string, i: number) => (
                        <li key={i}>{a}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {details.notes && (
                  <div>
                    <h4 className="font-semibold text-primary mb-2">
                      注意事项
                    </h4>
                    <ul className="list-disc ml-5 text-muted-foreground">
                      {details.notes.map((n: string, i: number) => (
                        <li key={i}>{n}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}

            {tags && tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-muted text-muted-foreground px-3 py-1.5 rounded-md border border-gold/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {extraContent}

            {website && (
              <a
                href={`https://${website}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-4 text-sm text-primary hover:text-gold-glow transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                访问官网
              </a>
            )}
          </motion.div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
