'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Check, ChevronRight, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'
import { templates } from '@/lib/templates'
import type { InvitationTemplate } from '@/types/template'

const categories = [
  { id: 'all', name: 'Todas' },
  { id: 'wedding', name: 'Bodas' },
  { id: 'quinceanera', name: 'Quinceaneras' },
  { id: 'baby-shower', name: 'Baby Shower' },
  { id: 'birthday', name: 'Cumpleanos' },
] as const

interface TemplateSelectorProps {
  onSelect?: (template: InvitationTemplate) => void
  showLink?: boolean
}

export function TemplateSelector({ onSelect, showLink = true }: TemplateSelectorProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null)

  const filteredTemplates = selectedCategory === 'all' 
    ? templates 
    : templates.filter(t => t.category === selectedCategory)

  const handleSelect = (template: InvitationTemplate) => {
    setSelectedTemplate(template.id)
    onSelect?.(template)
  }

  return (
    <div className="space-y-8">
      {/* Category Filter */}
      <div className="flex flex-wrap gap-2">
        {categories.map(category => (
          <Button
            key={category.id}
            variant={selectedCategory === category.id ? 'default' : 'outline'}
            size="sm"
            onClick={() => setSelectedCategory(category.id)}
          >
            {category.name}
          </Button>
        ))}
      </div>

      {/* Templates Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredTemplates.map(template => (
          <Card 
            key={template.id}
            className={cn(
              'group cursor-pointer transition-all hover:shadow-lg',
              selectedTemplate === template.id && 'ring-2 ring-primary'
            )}
            onClick={() => handleSelect(template)}
          >
            <CardHeader className="p-0">
              <div className="relative aspect-[4/3] overflow-hidden rounded-t-lg">
                <Image
                  src={template.thumbnail}
                  alt={template.name}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
                {selectedTemplate === template.id && (
                  <div className="absolute inset-0 flex items-center justify-center bg-primary/20">
                    <div className="rounded-full bg-primary p-2">
                      <Check className="size-6 text-primary-foreground" />
                    </div>
                  </div>
                )}
                <Badge 
                  variant="secondary" 
                  className="absolute left-3 top-3 capitalize"
                >
                  {template.category === 'wedding' && 'Boda'}
                  {template.category === 'quinceanera' && 'XV Anos'}
                  {template.category === 'baby-shower' && 'Baby Shower'}
                  {template.category === 'birthday' && 'Cumpleanos'}
                  {template.category === 'other' && 'Otro'}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="p-4">
              <CardTitle className="text-lg">{template.name}</CardTitle>
              <CardDescription className="mt-1 line-clamp-2">
                {template.description}
              </CardDescription>
              <div className="mt-3 flex items-center gap-2 text-xs text-muted-foreground">
                <Sparkles className="size-3" />
                <span>{template.fieldGroups.length} secciones</span>
                <span>•</span>
                <span>
                  {template.fieldGroups.reduce((acc, g) => acc + g.fields.length, 0)} campos
                </span>
              </div>
            </CardContent>
            {showLink && (
              <CardFooter className="border-t p-4">
                <Button asChild className="w-full" variant="secondary">
                  <Link href={`/dashboard/invitations/new?template=${template.id}`}>
                    Usar esta plantilla
                    <ChevronRight className="ml-2 size-4" />
                  </Link>
                </Button>
              </CardFooter>
            )}
          </Card>
        ))}
      </div>

      {filteredTemplates.length === 0 && (
        <div className="py-12 text-center text-muted-foreground">
          No hay plantillas disponibles en esta categoria.
        </div>
      )}
    </div>
  )
}
