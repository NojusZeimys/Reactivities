using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Application.Activities.Commands;
using FluentValidation;
using MediatR;

namespace Application.Core
{
  public class ValidationBehavior<TRequset, TResponse>(IValidator<TRequset>? validator = null)
  : IPipelineBehavior<TRequset, TResponse> where TRequset : notnull
  {
    public async Task<TResponse> Handle(TRequset request, RequestHandlerDelegate<TResponse> next, CancellationToken cancellationToken)
    {
      if (validator == null) return await next();

      var validationResult = await validator.ValidateAsync(request, cancellationToken);

            if (!validationResult.IsValid)
            {
                throw new ValidationException(validationResult.Errors);

            }

        return await next();
    }
  }
}